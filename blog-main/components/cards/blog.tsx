import { cn, getReadingTime } from '@/lib/utils'
import { IBlog } from '@/types'
import { format } from 'date-fns'
import { CalendarDays, Clock, Dot, Layers2, Minus, Tag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { API_URL } from '@/config/api.config'

interface Props extends IBlog {
	isVertical?: boolean
}

function BlogCard(blog:any) {
	return (
		<div
			className={cn(
				'grid gap-4 group',
				blog.isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
			)}
		>
			<Link href={`/blogs/${blog.slug}`}>
				<div className='relative bg-secondary rounded-lg'>
					<Image
						width={650}
						height={335}
						src={`${blog.image}`}
						alt={blog.title}
				        className='px-2 md:px-7 rounded-lg hover:rounded-lg group-hover:-translate-y-7 w-[450px] h-[300px] ml-12
						 -translate-y-6 transition-all object-cover grayscale group-hover:grayscale-0
						  max-md:-translate-y-2 max-md:group-hover:-translate-y-3'
					/>
				</div>
			</Link>
			<div className='flex flex-col space-y-4'>
				<Link href={`/blogs/${blog.slug}`} className='flex flex-col space-y-4'>
					<div className='flex items-center gap-4'>
						<div className='flex items-center gap-2'>
							<CalendarDays className='w-5 h-5' />
							<p>{blog.createdAt}</p>
						</div>
					</div>

					<h2 className='text-3xl max-md:text-2xl font-creteRound group-hover:text-blue-500 transition-colors'>
						{blog.title}
					</h2>
					<p className='text-muted-foreground line-clamp-3'>
						{blog.description}
					</p>
				</Link>
				<div className='flex items-center gap-4'>
					<div className='flex items-center gap-2'>
						<Image
							src={blog.author.image}
							alt='author'
							width={70}
							height={70}
							className='object-cover rounded-2xl'
						/>
						<p>by {blog.author.name}</p>
					</div>
					<Dot />

				</div>
			</div>
		</div>
	)
}

export default BlogCard
