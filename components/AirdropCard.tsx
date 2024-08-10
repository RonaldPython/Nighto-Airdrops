import { formatAmount } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

const AirdropCard = ({ account, userName, showBalance}: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card ">
      <div className="bank-card_content">
        <div>
            <h1 className="text-16 font-semibold text-white ">
                {account.name || userName}
            </h1>

            <p className="font-ibm-plex-serif font-black text-white">
                {formatAmount(account.currentBalance)}

            </p>
        </div>
            
        <article className="flex flex-col gap-2">
            <div className="flex justify-between">
                <h1 className="text-12 font-semibold text-white">
                    {userName}
                </h1>

                
            </div>
            
        </article>
        </div>

        <div className="bank-card_icon ">
            <Image 
            src="/icons/Paypass.svg"
            width={60}
            height={50}
            alt="pay"
            className=""
            />


            <Image 
            src="/icons/logo.svg"
            width={70}
            height={40}
            alt="logo"
            className="ml-8"
            />
            
        </div>
        <Image 
        src="/icons/lines.png"
        width={316}
        height={190}
        alt="lines"
        className="absolute top-0 left-0 "
        />
      </Link>
    </div>
  )
}

export default AirdropCard
