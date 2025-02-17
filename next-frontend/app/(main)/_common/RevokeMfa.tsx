'use client'

import { Button } from '@/components/ui/button'
import { revokeMFAMutation } from '@/lib/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from '@/hooks/use-toast'
import { Loader } from 'lucide-react'
import { useCallback } from 'react'

const RevokeMfa = () => {
  const queryClient = useQueryClient()
  const { mutate, isPending } = useMutation({
    mutationFn: revokeMFAMutation,
    onSuccess: (response: any) => {
      queryClient.invalidateQueries({
        queryKey: ['authUser'],
      })
      toast({
        title: 'Success',
        description: response.message,
      })
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      })
    },
  })

  const handleClick = useCallback(() => {
    mutate()
  }, [])

  return (
    <Button
      disabled={isPending}
      className="h-[35px] !text-[#c40006d3] !bg-red-100 shadow-none mr-1"
      onClick={handleClick}
    >
      {isPending && <Loader className="animate-spin" />}
      Revoke Access
    </Button>
  )
}

export default RevokeMfa
