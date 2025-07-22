'use client'

import { ChangeEvent, useState } from 'react'
import { debounce } from 'lodash'
import { Search, Loader2 } from 'lucide-react'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useActions } from '@/hooks/useActions'
import SearchCard from '@/components/cards/search'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
} from '@/components/ui/drawer'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

function GlobalSearch() {
  const { searchBlog } = useActions()
  const { search_blog, isLoading } = useTypedSelector(state => state.blog)
  const [query, setQuery] = useState('')

  console.log(search_blog);
  

 const handleSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
  const text = e.target.value.toLowerCase()
  setQuery(text)

  if (text.trim().length > 2) {
    searchBlog(text) 
  }
  else {
    searchBlog('') 
  }
}, 500)

  return (
    <Drawer>
      <DrawerTrigger>
        <div className='hover:bg-blue-400/20 cursor-pointer rounded-sm transition-colors flex items-center gap-1 px-3 py-2'>
          <span className='hidden md:flex'>Search</span>
          <Search className='w-4 h-4' />
        </div>
      </DrawerTrigger>

      <DrawerContent>
        <div className='container max-w-6xl mx-auto py-12'>
          <h1 className='mb-4 text-2xl'>You can find blogs</h1>
          <Input
            className='bg-secondary'
            placeholder='Type to search blog...'
            onChange={handleSearch}
            disabled={isLoading}
          />

          {isLoading && <Loader2 className='animate-spin mt-4 mx-auto' />}

          {Array.isArray(search_blog) && search_blog.length > 0 && (
            <div className='text-2xl font-creteRound mt-8'>
              {search_blog.length} Results found for "{query}"
            </div>
          )}

          <div className='grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-6 mt-3 mb-5'>
            {Array.isArray(search_blog) &&
              search_blog.map(post => <SearchCard key={post.slug} {...post} />)}
          </div>

          {Array.isArray(search_blog) && search_blog.length > 0 &&  <Separator className='mt-3' />}
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export default GlobalSearch
