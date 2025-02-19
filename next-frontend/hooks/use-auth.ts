'use client'

import { getUserSessionQueryFn } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const useAuth = () => {
  const query = useQuery({
    queryKey: ['authUser'],
    queryFn: getUserSessionQueryFn,
    staleTime: Infinity,
  })
  return query
}

export default useAuth
