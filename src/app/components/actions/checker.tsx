"use client";

import React from "react";
import { useEffect, useState } from 'react'

type Props = {
  locale?: string
}

const NowTime = ({ locale = 'ja-JP' }: Props) => {
  const [date, setDate] = useState<Date | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])
  if (!date){
    return (
      <div>現在の日時:･･･ローディング中</div>
    )
  }
  return <div>現在の日時: {date.toLocaleString(locale)}</div>
}
export default NowTime;

