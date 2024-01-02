"use client"

import React, { useEffect, useState } from 'react'
import HeaderMenu from '@/components/Utilities/headerMenu'
import Pagination from '@/components/Utilities/pagination'
import AnimeList from '@/components/AnimeList'

const Page = () => {
  const [page, setPage] = useState(1)
  const [topAnime, setTopAnime] = useState([])

  const fetchData = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
    const data = await response.json()
    setTopAnime(data)
  }

  useEffect(() => {
    fetchData()
  },[page])


  return (
    <>
      <HeaderMenu title={`Anime Populer #${page}`}/>
      <AnimeList api={topAnime} />
      <Pagination page={page} setPage={setPage} />
    </>
  )
}

export default Page
