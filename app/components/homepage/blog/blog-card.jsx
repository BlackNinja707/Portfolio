// @flow strict
import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import Link from 'next/link';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';
import VideoComponent from './VideoComponent';

function BlogCard({ blog }) {

  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <VideoComponent
          videoSrc={"/projects/"+blog?.intro+".mp4"}
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <Link target='_blank' href={blog.url}>
          <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
            {blog.name}
          </p>
        </Link>
        <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
          {blog.desc}
        </p>
        {/* <div className="">
          <Link target='_blank' href={blog.url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
        <div className='flex flex-wrap mb-2 text-sm text-[#e1fc48] pb-3 lg:pb-6 gap-1'>
          {blog.tools.map((value, index) => <p className='p-1 border border-gray-600' key={index}>{value}</p>)}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;