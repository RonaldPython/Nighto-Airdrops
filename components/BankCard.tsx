import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Copy from './Copy'

const BankCard = ({...data}) => {
  const showBalance = true;

  console.log(data);
  return (
    <div className="flex flex-col">
      <Link href={`/transaction-history/?id=1000}`} className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">
              Anass Othman
            </h1>
            <p className="font-ibm-plex-serif font-black text-white">
              {formatAmount(100)}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">
                dogpack404
              </h1>
              <h2 className="text-12 font-semibold text-white">
              ●● / ●●
              </h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">4575</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image 
            src="/icons/Paypass.svg"
            width={20}
            height={24}
            alt="pay"
          />
          <Image 
            src="/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-5"
          />
        </div>

        <Image 
          src="/icons/lines.png"
          width={316}
          height={190}
          alt="lines"
          className="absolute top-0 left-0"
        />
      </Link>

      {showBalance && <Copy title="2555" />}
    </div>
  )
}

export default BankCard