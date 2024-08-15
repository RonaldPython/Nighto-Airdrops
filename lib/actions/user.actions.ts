"use server"

import { ID, Query } from "node-appwrite"
import { createAdminClient, createSessionClient } from "../server/appwrite"
import { cookies } from "next/headers"
import { parseStringify } from "../utils"


const {
  APPWRITE_DATABASE_ID: DATABASE_ID,
  APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
  APPWRITE_AIRDROP_COLLECTION_ID: AIRDROP_COLLECTION_ID,
} = process.env;


export const getUserInfo = async ({ userId }: getUserInfoProps) => {
  try {
    const { database } = await createAdminClient();

    const user = await database.listDocuments(
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      [Query.equal('userId', [userId])]
    )

    return parseStringify(user.documents[0]);
  } catch (error) {
    console.log(error)
  }
}

export const signIn = async ({ email, password }: signInProps) => {
  
  
    const { account } = await createAdminClient();
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    const user = await getUserInfo({ userId: session.userId }) 

    return parseStringify(user);
  
}



export const signUp =  async ({password, ...userData}: SignUpParams) => {
  const { email, firstName, lastName } = userData


    try {
      const { account, database } = await createAdminClient();

      const newUserAccount = await account.create(
        ID.unique(), 
        email, 
        password, 
        `${userData.firstName} ${userData.lastName}`
      );

      if(!newUserAccount) throw new Error("Error Creating An Account")

      const newUser = await database.createDocument(
        DATABASE_ID!,
        USER_COLLECTION_ID!,
        newUserAccount.$id,
        {
         ...userData,
         userId: newUserAccount.$id,
         balance: 0.00
        }
      ) 
    

      const session = await account.createEmailPasswordSession(email, password);
    
      cookies().set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      });

      return parseStringify(newUser)
    } catch (error) {
      console.error("Error", error)  
    }
}


export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    const user = await account.get();

    return parseStringify(user)
  } catch (error) {
    return null;
  }
}


export const logoutAccount = async () => {
  try {
    const { account } = await createSessionClient()

    cookies().delete('appwrite-session')

    await account.deleteSession('current')
  } catch (error) {
    return null
  }
}

export async function GetUserBalance() {
  const { database } = await createAdminClient();

  try { 
    const { account } = await createSessionClient();
    const user = await account.get();

    const u = parseStringify(user)



    const userBalance = await database.getDocument(
      DATABASE_ID!,
      USER_COLLECTION_ID!,
      u.$id,
    
    )

    return userBalance

  } catch (error) {
    return error
  }
}



export async function RegisterAirdrop({ ...data }) {
  const { database } = await createAdminClient();

  try {
    const { account } = await createSessionClient();
    const user = await account.get();

    const u = parseStringify(user)

    const res = await database.createDocument(
      DATABASE_ID!,
      AIRDROP_COLLECTION_ID!,
      ID.unique(), // Document ID, 'unique()' generates a unique ID
      {
        airdropName: data.airdropName,
        airdropTime: data.airdropTime, // Use the converted ISO 8601 string
        dailyActivity: data.dailyActivity,
        airdropType: data.airdropType,
        airdropStatus: data.airdropStatus,
        airdropLink: data.airdropLink,
        userId: u.$id, // Adding the userId to the document
      }
    );
    
    return res

  } catch (error) {
    throw error
  }
}