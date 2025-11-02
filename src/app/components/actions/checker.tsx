"use client";

import React from "react";
import { useEffect, useState } from 'react'
import styles from "../Header.module.css"

type Props = {
  locale?: string
}

const NowTime = ({ locale = 'ja-JP' }: Props) => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])
  return <div>現在の日時: {date.toLocaleString(locale)}</div>
}
export default NowTime;

