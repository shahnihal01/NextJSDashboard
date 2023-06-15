"use client"; 
import { useState } from "react"

export default function Home() {
  const [toggle,setToggle]=useState(false);

  return (
    <main>
      <div>
        <div className='flex min-h-screen flex-col bg-[#F7F8FA] lg:flex-row'>
          <div className='border-r-[1px] border-[#E9EBF0]'>
            <div className='flex items-center justify-between border-b-[1px] border-[#E9EBF0] py-[30px] px-[32px]'>
              <p className='text-xl font-semibold'>Dashboard</p>
              <img src='/images/menu-arrow.svg' alt='menu-arrow' className='cursor-pointer' onClick={()=>setToggle(!toggle)}></img>
            </div>
            <div className='hidden px-[32px] lg:block'>
              <div className='flex items-center justify-between border-b-[1px] border-[#E9EBF0] py-[30px]'>
                <div className='flex items-center gap-4'>
                  <img className='rounded-full p-[2px] ring-2 ring-[#3B82F6]' src='/images/Avatar01.png' alt='avatar01'></img>
                  <div className='flex flex-col gap-[2px]'>
                    <p className='text-[12px] font-semibold text-[#1F2633]'>Nancy Martino</p>
                    <p className='text-[11px] font-semibold text-[#B8BFCC]'>Designer</p>
                  </div>
                  <img src='/images/expandAvatar.svg' alt='expAva' width="10" height="10" className='cursor-pointer'></img>
                </div>
              </div>
            </div>
            <div className={`${toggle?'flex-1 opacity-100':'invisible w-0 opacity-0 duration-500'} absolute z-10 flex w-full flex-col lg:static bg-[#F7F8FA] px-[32px] pb-[30px] transition-all lg:visible lg:w-full lg:opacity-100`}>
              <div className='flex flex-col border-b-[1px] border-[#E9EBF0] py-[30px]'>
                <div className='mb-[28px] flex items-center justify-between'>
                  <p className='text-[12px] font-semibold uppercase text-[#98A2B2]'>DASHBOARDS</p>
                  <img src='/images/arrowUp.svg' alt='arrowUp' className='cursor-pointer' width="10"></img>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/inbox.svg' alt='inbox' width="20" className='cursor-pointer'></img>
                      <p className='text-[12px] font-semibold'>Inbox</p>
                    </div>
                    <p className='text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]'>4</p>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/drive.svg' alt='inbox' width="20" className='cursor-pointer'></img>
                      <p className='text-[12px] font-semibold'>Drive Files</p>
                    </div>
                    <p className='text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]'>435</p>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/boards.svg' alt='inbox' width="20" className='cursor-pointer'></img>
                      <p className='text-[12px] font-semibold'>Boards</p>
                    </div>
                    <p className='text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]'>5</p>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/updates.svg' alt='inbox' width="20" className='cursor-pointer'></img>
                      <p className='text-[12px] font-semibold'>Updates</p>
                    </div>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/analytics.svg' alt='inbox' width="20" className='cursor-pointer'></img>
                      <p className='text-[12px] font-semibold'>Analytics</p>
                    </div>
                    <p className='text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]'>2</p>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/crm.svg' alt='inbox' width="20" className='cursor-pointer'></img>
                      <p className='text-[12px] font-semibold'>CRM Dashboard</p>
                    </div>
                    <p className='text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]'>2</p>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/ecomm.svg' alt='inbox' width="20" className='cursor-pointer'></img>
                      <p className='text-[12px] font-semibold'>Ecommerce</p>
                    </div>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/crypto.svg' alt='inbox' width="20" className='cursor-pointer'></img>
                      <p className='text-[12px] font-semibold'>Cryptocurrency</p>
                    </div>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/projects.svg' alt='inbox' width="20" className='cursor-pointer'></img>
                      <p className='text-[12px] font-semibold'>Projects</p>
                    </div>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/nft.svg' alt='inbox' width="20" className='cursor-pointer'></img>
                      <p className='text-[12px] font-semibold'>NFT Marketplace</p>
                    </div>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/settings.svg' alt='inbox' width="20" className='cursor-pointer'></img>
                      <p className='text-[12px] font-semibold'>Settings</p>
                    </div>
                    <p className='text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]'>2</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col border-b-[1px] border-[#E9EBF0] py-[30px]'>
                <div className='mb-[28px] flex items-center justify-between'>
                  <p className='text-[12px] font-semibold uppercase text-[#98A2B2]'>PROJECTS</p>
                  <img src='/images/arrowUp.svg' alt='arrowUp' className='cursor-pointer' width="10"></img>
                </div>
                <div className='flex flex-col gap-5'>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/hashtag.svg' alt='hash' width="16" className='cursor-pointer'></img>
                      <p className='text-[12px] font-medium'>Additional Calendar</p>
                    </div>
                    <p className='text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]'>6</p>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/hashtag.svg' alt='hash' width="16" className='cursor-pointer'></img>
                      <p className='text-[12px] font-medium'>Brand Logo Design</p>
                    </div>
                    <p className='text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]'>11</p>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/hashtag.svg' alt='hash' width="16" className='cursor-pointer'></img>
                      <p className='text-[12px] font-medium'>User Research</p>
                    </div>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/hashtag.svg' alt='hash' width="16" className='cursor-pointer'></img>
                      <p className='text-[12px] font-medium'>Marketing Sales</p>
                    </div>
                    <p className='text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]'>23</p>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/hashtag.svg' alt='hash' width="16" className='cursor-pointer'></img>
                      <p className='text-[12px] font-medium'>New Project Template</p>
                    </div>
                    <p className='text-[10px] font-extrabold text-[#2563EB] rounded-full bg-[#3B82F6]/10 px-[8px] py-[4px]'>2</p>
                  </div>
                  <div className='flex cursor-pointer items-center justify-between gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src='/images/addnewproject.svg' alt='hash' width="16" className='cursor-pointer'></img>
                      <p className='text-[12px] font-medium'>Add New Project</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${toggle?'hidden ':'false '}'flex-1 lg:block'}`}>
            <div className='hidden items-center justify-between border-b-[1px] border-[#E9EBF0] px-[36px] py-[21px] xl:flex'>
              <div className='flex gap-[32px]'>
                <div className='flex min-w-[200px] justify-between rounded-md border-[1px] border-[#EBEEF2] bg-white p-[12px] drop-shadow-sm'>
                  <div className='flex items-center gap-3'>
                    <img src='/images/search.svg' alt='search' className='cursor-pointer' width="20"></img>
                    <p className='cursor-pointer text-[12px] font-semibold text-[#98A2B2]'>Search Tasks</p>
                  </div>
                  <img src='/images/input.svg' alt='input' width="20" className='cursor-pointer'></img>
                </div>
                <img src='/images/voice.svg' alt='input' width="20" className='cursor-pointer'></img>
              </div>
              <div className='flex gap-[32px]'>
                <p className='text-[11px] font-semibold text-black cursor-pointer'>Dashboard</p>
                <p className='text-[11px] font-semibold text-[#7A8699] cursor-pointer'>My Tasks</p>
                <p className='text-[11px] font-semibold text-[#7A8699] cursor-pointer'>Reporting</p>
                <p className='text-[11px] font-semibold text-[#7A8699] cursor-pointer'>Portfolios</p>
                <p className='text-[11px] font-semibold text-[#7A8699] cursor-pointer'>Goals</p>
              </div>
              <div className='flex items-center gap-3'>
                <img src='/images/folder.svg' alt='input' width="20" className='cursor-pointer'></img>
                <img src='/images/bell.svg' alt='input' width="20" className='cursor-pointer'></img>
                <div className='relative'>
                  <img src='/images/Avatar01.png' alt='avatar01' width="30" className='cursor-pointer rounded-full p-[2px] ring-2 ring-[#3B82F6]'></img>
                  <span className='absolute -top-1 left-4 rounded-full bg-red-500 px-[6px] py-[2px] text-[10px] font-bold text-white'>4</span>
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center justify-between gap-2 px-[16px] py-[28px] md:px-[36px] xl:flex-row'>
              <div className='flex items-center gap-[24px]'>
                <p className='text-3xl font-semibold text-[#1F2633]'>Tasks Board</p>
                <img src='/images/pencil.svg' alt='pencil' width="20" className='cursor-pointer'></img>
              </div>
              <div className='flex flex-wrap justify-center gap-[10px] md:gap-[24px] xl:gap-[32px]'>
                <p className='cursor-pointer text-[11px] font-semibold text-[#3B82F6] underline decoration-[#3B82F6] decoration-1 underline-offset-8'>Timeline</p>
                <p className='cursor-pointer text-[11px] font-semibold text-[#7A8699]'>Calendar</p>
                <p className='cursor-pointer text-[11px] font-semibold text-[#7A8699]'>Dashboard</p>
                <p className='cursor-pointer text-[11px] font-semibold text-[#7A8699]'>Progress</p>
                <p className='cursor-pointer text-[11px] font-semibold text-[#7A8699]'>Forms</p>
                <p className='cursor-pointer text-[11px] font-semibold text-[#7A8699]'>More</p>
              </div>
              <div className='mt-2 flex items-center gap-2'>
                <div className='flex -space-x-4'>
                  <img src='/images/Avatar01.png' alt='avatar01' width="40" className='rounded-full border-2 border-white'></img>
                  <img src='/images/Avatar02.png' alt='avatar02' width="40" className='rounded-full border-2 border-white'></img>
                  <img src='/images/Avatar03.png' alt='avatar03' width="40" className='rounded-full border-2 border-white'></img>
                  <img src='/images/Avatar04.png' alt='avatar04' width="40" className='rounded-full border-2 border-white'></img>
                  <p className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#F2F4F7] text-xs font-medium text-[#606C80]'>+5</p>
                </div>
                <img src='/images/addppl.svg' alt='hash' width="40" className='cursor-pointer'></img>
              </div>
            </div>
            <div className='flex flex-col items-center justify-between gap-3 px-[16px] pb-[28px] md:px-[36px] xl:flex-row'>
              <div className='flex w-full flex-wrap items-center justify-between gap-2 xl:w-auto xl:gap-4'>
                <div className='grid grid-cols-2 gap-2 rounded-lg bg-white drop-shadow-sm'>
                  <div className='flex cursor-pointer items-center gap-2 rounded-l-lg border-r-[1px] border-[#EBEEF2] bg-[#FAFBFC] p-[8px]'>
                    <img src='/images/dashboard.svg' alt='dashboard' width="20" className='cursor-pointer'></img>
                    <p className='text-[12px] font-semibold text-[#606C80]'>Board View</p>
                  </div>
                  <div className='flex cursor-pointer items-center gap-2 p-[8px]'>
                    <img src='/images/list.svg' alt='list' width="20" className='cursor-pointer'></img>
                    <p className='text-[12px] font-semibold text-[#606C80]'>List View</p>
                  </div>
                </div>
                <div className='hidden h-8 w-[1px] bg-[#EBEEF2] xl:block'></div>
                <div className='flex cursor-pointer items-center gap-2'>
                  <img src='/images/lock.svg' alt='lock' width="16" className='cursor-pointer'></img>
                  <p className='text-[12px] font-semibold text-[#98A2B2]'>Limited Access</p>
                  <img src='/images/arrowDown.svg' alt='arrowDown' width="16" className='cursor-pointer'></img>
                </div>
                <div className='hidden h-8 w-[1px] bg-[#EBEEF2] xl:block'></div>
                <div className='flex items-center gap-2'>
                  <p className='cursor-pointer text-[12px] font-semibold text-[#98A2B2]'>Owners</p>
                  <img src='/images/twitter.svg' alt='twitter' width="16" className='cursor-pointer'></img>
                  <p className='cursor-pointer text-[12px] font-semibold text-[#606C80]'>Twitter Team</p>
                </div>
              </div>
              <div className='flex w-full max-w-[300px] items-center gap-3 self-start rounded-md border-[1px] border-[#EBEEF2] bg-white py-[8px] pl-[8px] pr-8 xl:w-auto'>
                <img src='/images/search.svg' alt='search' width="20" className='cursor-pointer'></img>
                <p className='text-[12px] font-semibold text-[#98A2B2]'>Search Tasks</p>
              </div>
              <div className='flex gap-2 self-start'>
                <div className='rounded-lg bg-white p-2 drop-shadow-sm'>
                  <img src='/images/selectfolder.svg' alt='search' width="15" className='cursor-pointer'></img>
                </div>
                <div className='rounded-lg bg-white p-2 drop-shadow-sm'>
                  <img src='/images/centeralign.svg' alt='search' width="15" className='cursor-pointer'></img>
                </div>
                <div className='rounded-lg bg-white p-2 drop-shadow-sm'>
                  <img src='/images/leftalign.svg' alt='search' width="15" className='cursor-pointer'></img>
                </div>
                <div className='rounded-lg bg-white p-2 drop-shadow-sm'>
                  <img src='/images/circles.svg' alt='search' width="15" className='cursor-pointer'></img>
                </div>
                <div className='rounded-lg bg-white p-2 drop-shadow-sm'>
                  <img src='/images/customizearr.svg' alt='search' width="15" className='cursor-pointer'></img>
                </div>
              </div>
            </div>
            <div className='grid grid-cols-1 gap-[24px] px-[16px] pb-[28px] md:grid-cols-2 md:px-[36px] xl:grid-cols-4'>
              <div>
                <div className='flex items-center justify-between pb-[28px]'>
                  <div className='flex items-center justify-between gap-3'>
                    <p className='text-[14px] font-medium'>Backlog Tasks</p>
                    <p className='bg-[#CA8A04] text-[#CA8A04] rounded-full bg-opacity-10 px-[8px] py-[4px] text-[10px] font-bold'>5</p>
                  </div>
                  <div>
                    <img src='/images/3dots.svg' alt='3dots' width="20" className='cursor-pointer'></img>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Model Answer</p>
                      <div className='flex w-12 items-center justify-end gap-2'>
                        <img src='/images/selectfolder.svg' alt='selectfolder' width="16" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>4</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#UI007</p>
                      <p className='rounded-full bg-[#2563EB] bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[#2563EB]'>Design</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[#CA8A04] bg-[#CA8A04]'>Backlog</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex -space-x-3'>
                          <img src='/images/Avatar02.png' alt='avatar02' width="32" className='rounded-full border-2 border-white'></img>
                          <img src='/images/Avatar03.png' alt='avatar03' width="32" className='rounded-full border-2 border-white'></img>
                          <p className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F2F4F7] text-xs font-medium text-[#606C80]'>+5</p>
                        </div>
                        <img src='/images/addppl.svg' alt='hash' width="32" className='cursor-pointer'></img>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <img src='/images/clip.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                        <img src='/images/chat.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>3</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Create calendar, chat and email app pages</p>
                      <div className='flex w-12 items-center justify-end gap-2'>
                        <img src='/images/selectfolder.svg' alt='selectfolder' width="16" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>4</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#UI003</p>
                      <p className='rounded-full bg-[#2563EB] bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[#2563EB]'>Development</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[#CA8A04] bg-[#CA8A04]'>Backlog</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex -space-x-3'>
                          <img src='/images/Avatar03.png' alt='avatar02' width="32" className='rounded-full border-2 border-white'></img>
                          <img src='/images/Avatar04.png' alt='avatar03' width="32" className='rounded-full border-2 border-white'></img>
                          <p className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F2F4F7] text-xs font-medium text-[#606C80]'>+5</p>
                        </div>
                        <img src='/images/addppl.svg' alt='hash' width="32" className='cursor-pointer'></img>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <img src='/images/clip.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                        <img src='/images/chat.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>4</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Product Design, Figma, Sketch (Software), Prototype</p>
                      <div className='flex w-12 items-center justify-end gap-2'>
                        <img src='/images/selectfolder.svg' alt='selectfolder' width="16" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#BC05</p>
                      <p className='rounded-full bg-[#2563EB] bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[#2563EB]'>Project</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[#CA8A04] bg-[#CA8A04]'>Backlog</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex -space-x-3'>
                          <img src='/images/Avatar02.png' alt='avatar02' width="32" className='rounded-full border-2 border-white'></img>
                        </div>
                        <img src='/images/addppl.svg' alt='hash' width="32" className='cursor-pointer'></img>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <img src='/images/clip.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                        <img src='/images/chat.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>4</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Change email option process</p>
                      <div className='flex w-12 items-center justify-end gap-2'>
                        <img src='/images/selectfolder.svg' alt='selectfolder' width="16" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#FTC07</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[#CA8A04] bg-[#CA8A04]'>Backlog</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex -space-x-3'>
                          <img src='/images/Avatar01.png' alt='avatar01' width="32" className='rounded-full border-2 border-white'></img>
                          <img src='/images/Avatar03.png' alt='avatar03' width="32" className='rounded-full border-2 border-white'></img>
                          <p className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F2F4F7] text-xs font-medium text-[#606C80]'>+5</p>
                        </div>
                        <img src='/images/addppl.svg' alt='hash' width="32" className='cursor-pointer'></img>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <img src='/images/clip.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                        <img src='/images/chat.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>4</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Post Launch reminder/ Post List</p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#FTC09</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[#CA8A04] bg-[#CA8A04]'>Backlog</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center justify-between gap-2'>
                        <img src='/images/addppl.svg' alt='hash' width="32" className='cursor-pointer'></img>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-center rounded-lg bg-white py-1 drop-shadow-sm'>
                    <img src='/images/addtask.svg' alt='addtask' width="20" className='cursor-pointer'></img>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex items-center justify-between pb-[28px]'>
                  <div className='flex items-center justify-between gap-3'>
                    <p className='text-[14px] font-medium'>To-Do Tasks</p>
                    <p className='bg-[#DB2777] text-[#DB2777] rounded-full bg-opacity-10 px-[8px] py-[4px] text-[10px] font-bold'>4</p>
                  </div>
                  <div>
                    <img src='/images/3dots.svg' alt='3dots' width="20" className='cursor-pointer'></img>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Model Answer</p>
                      <div className='flex w-12 items-center justify-end gap-2'>
                        <img src='/images/selectfolder.svg' alt='selectfolder' width="16" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>1</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#UI005</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[#DB2777] bg-[#DB2777]'>To-Do</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex -space-x-3'>
                          <img src='/images/Avatar02.png' alt='avatar02' width="32" className='rounded-full border-2 border-white'></img>
                          <img src='/images/Avatar03.png' alt='avatar03' width="32" className='rounded-full border-2 border-white'></img>
                          <p className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F2F4F7] text-xs font-medium text-[#606C80]'>+5</p>
                        </div>
                        <img src='/images/addppl.svg' alt='hash' width="32" className='cursor-pointer'></img>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <img src='/images/clip.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                        <img src='/images/chat.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>4</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Add authentication pages</p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#UI008</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[#DB2777] bg-[#DB2777]'>To-Do</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Profile Page Satructure</p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#UI008</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[#DB2777] bg-[#DB2777]'>To-Do</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex -space-x-3'>
                          <img src='/images/Avatar02.png' alt='avatar02' width="32" className='rounded-full border-2 border-white'></img>
                        </div>
                        <img src='/images/addppl.svg' alt='hash' width="32" className='cursor-pointer'></img>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <img src='/images/clip.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                        <img src='/images/chat.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>4</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Create calendar, chat and email app pages</p>
                      <div className='flex w-12 items-center justify-end gap-2'>
                        <img src='/images/selectfolder.svg' alt='selectfolder' width="16" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>1</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#UI003</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold text-[#DB2777] bg-[#DB2777]'>To-Do</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex -space-x-3'>
                          <img src='/images/Avatar04.png' alt='avatar01' width="32" className='rounded-full border-2 border-white'></img>
                          <img src='/images/Avatar01.png' alt='avatar03' width="32" className='rounded-full border-2 border-white'></img>
                          <p className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F2F4F7] text-xs font-medium text-[#606C80]'>+5</p>
                        </div>
                        <img src='/images/addppl.svg' alt='hash' width="32" className='cursor-pointer'></img>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <img src='/images/clip.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                        <img src='/images/chat.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>4</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-center rounded-lg bg-white py-1 drop-shadow-sm'>
                    <img src='/images/addtask.svg' alt='addtask' width="20" className='cursor-pointer'></img>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex items-center justify-between pb-[28px]'>
                  <div className='flex items-center justify-between gap-3'>
                    <p className='text-[14px] font-medium'>In Progress</p>
                    <p className='bg-[#9333EA] text-[#9333EA] rounded-full bg-opacity-10 px-[8px] py-[4px] text-[10px] font-bold'>2</p>
                  </div>
                  <div>
                    <img src='/images/3dots.svg' alt='3dots' width="20" className='cursor-pointer'></img>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Model Answer</p>
                      <div className='flex w-12 items-center justify-end gap-2'>
                        <img src='/images/selectfolder.svg' alt='selectfolder' width="16" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>1</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#002</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold bg-[#9333EA] text-[#9333EA]'>In Progress</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex -space-x-3'>
                          <img src='/images/Avatar02.png' alt='avatar02' width="32" className='rounded-full border-2 border-white'></img>
                          <img src='/images/Avatar03.png' alt='avatar03' width="32" className='rounded-full border-2 border-white'></img>
                          <p className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F2F4F7] text-xs font-medium text-[#606C80]'>+5</p>
                        </div>
                        <img src='/images/addppl.svg' alt='hash' width="32" className='cursor-pointer'></img>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <img src='/images/clip.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                        <img src='/images/chat.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>4</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Model Answer</p>
                      <div className='flex w-12 items-center justify-end gap-2'>
                        <img src='/images/selectfolder.svg' alt='selectfolder' width="16" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>1</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#002</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold bg-[#9333EA] text-[#9333EA]'>In Progress</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex -space-x-3'>
                          <img src='/images/Avatar02.png' alt='avatar02' width="32" className='rounded-full border-2 border-white'></img>
                          <img src='/images/Avatar03.png' alt='avatar03' width="32" className='rounded-full border-2 border-white'></img>
                          <p className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F2F4F7] text-xs font-medium text-[#606C80]'>+5</p>
                        </div>
                        <img src='/images/addppl.svg' alt='hash' width="32" className='cursor-pointer'></img>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <img src='/images/clip.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                        <img src='/images/chat.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>4</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex justify-center rounded-lg bg-white py-1 drop-shadow-sm'>
                    <img src='/images/addtask.svg' alt='addtask' width="20" className='cursor-pointer'></img>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex items-center justify-between pb-[28px]'>
                  <div className='flex items-center justify-between gap-3'>
                    <p className='text-[14px] font-medium'>Done</p>
                    <p className='bg-[#16A34A] text-[#16A34A] rounded-full bg-opacity-10 px-[8px] py-[4px] text-[10px] font-bold'>5</p>
                  </div>
                  <div>
                    <img src='/images/3dots.svg' alt='3dots' width="20" className='cursor-pointer'></img>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Model Answer</p>
                      <div className='flex w-12 items-center justify-end gap-2'>
                        <img src='/images/selectfolder.svg' alt='selectfolder' width="16" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>1</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#002</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold bg-[#16A34A] text-[#16A34A]'>Done</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex -space-x-3'>
                          <img src='/images/Avatar02.png' alt='avatar02' width="32" className='rounded-full border-2 border-white'></img>
                          <img src='/images/Avatar03.png' alt='avatar03' width="32" className='rounded-full border-2 border-white'></img>
                          <p className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#F2F4F7] text-xs font-medium text-[#606C80]'>+5</p>
                        </div>
                        <img src='/images/addppl.svg' alt='hash' width="32" className='cursor-pointer'></img>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <img src='/images/clip.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                        <img src='/images/chat.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>4</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Create calendar, chat and email app pages</p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#002</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold bg-[#16A34A] text-[#16A34A]'>Done</p>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Product Design, Figma, Sketch (Software), Prototype</p>
                      <div className='flex w-12 items-center justify-end gap-2'>
                        <img src='/images/selectfolder.svg' alt='selectfolder' width="16" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#BC05</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold bg-[#16A34A] text-[#16A34A]'>Done</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex -space-x-3'>
                          <img src='/images/Avatar02.png' alt='avatar02' width="32" className='rounded-full border-2 border-white'></img>
                        </div>
                        <img src='/images/addppl.svg' alt='hash' width="32" className='cursor-pointer'></img>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <img src='/images/clip.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                        <img src='/images/chat.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>4</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Model Answer</p>
                      <div className='flex w-12 items-center justify-end gap-2'>
                        <img src='/images/selectfolder.svg' alt='selectfolder' width="16" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>1</p>
                      </div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#002</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold bg-[#16A34A] text-[#16A34A]'>Done</p>
                    </div>
                    <div className='flex items-center justify-between'>
                      <div className='flex items-center justify-between gap-2'>
                        <div className='flex -space-x-3'>
                          <img src='/images/Avatar02.png' alt='avatar02' width="32" className='rounded-full border-2 border-white'></img>
                          <img src='/images/Avatar03.png' alt='avatar03' width="32" className='rounded-full border-2 border-white'></img>
                        </div>
                        <img src='/images/addppl.svg' alt='hash' width="32" className='cursor-pointer'></img>
                      </div>
                      <div className='flex items-center gap-1.5'>
                        <img src='/images/clip.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>2</p>
                        <img src='/images/chat.svg' alt='hash' width="20" className='cursor-pointer'></img>
                        <p className='text-[10px] font-bold text-[#33BFFF]'>4</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col gap-3 rounded-lg bg-white p-[20px] drop-shadow-sm'>
                    <div className='flex items-start justify-between gap-2'>
                      <p className='text-[12px] font-medium text-[#1F2633]'>Create calendar, chat and email app pages</p>
                    </div>
                    <div className='flex items-center gap-1'>
                      <p className='rounded-full border-[1px] border-[#EBEEF2] px-[8px] py-[5px] text-[8px] font-bold'>#002</p>
                      <p className='rounded-full bg-opacity-10 px-[8px] py-[5px] text-[8px] font-bold bg-[#16A34A] text-[#16A34A]'>Done</p>
                    </div>
                  </div>
                  <div className='flex justify-center rounded-lg bg-white py-1 drop-shadow-sm'>
                    <img src='/images/addtask.svg' alt='addtask' width="20" className='cursor-pointer'></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden min-h-full lg:block'>
            <div className='flex min-h-full flex-col'>
              <div className='border-b-[1px] border-l-[1px] border-[#E9EBF0] p-[33px]'>
                <img src='/images/close.svg' alt='close' width="20" className='cursor-pointer'></img>
              </div>
              <div className='flex flex-1 flex-col items-center justify-center gap-3 border-l-[1px] border-[#E9EBF0]'>
                <div className='relative'>
                  <img src='/images/Avatar02.png' alt='avatar02' width="35" className='rounded-full border-2 border-white'></img>
                  <span className='absolute bottom-0 left-6 h-3.5 w-3.5 bg-red-500 rounded-full border-2 border-white'></span>
                </div>
                <div className='relative'>
                  <img src='/images/Avatar01.png' alt='avatar02' width="35" className='rounded-full border-2 border-white'></img>
                  <span className='absolute bottom-0 left-6 h-3.5 w-3.5 bg-red-500 rounded-full border-2 border-white'></span>
                </div>
                <div className='relative'>
                  <img src='/images/Avatar03.png' alt='avatar02' width="35" className='rounded-full border-2 border-white'></img>
                  <span className='absolute -top-2 left-6 rounded-full bg-red-500 px-[6px] py-[2px] text-[10px] font-bold text-white'>12</span>
                  <span className='absolute bottom-0 left-6 h-3.5 w-3.5 bg-green-500 rounded-full border-2 border-white'></span>
                </div>
                <div className='relative'>
                  <img src='/images/Avatar04.png' alt='avatar02' width="35" className='rounded-full border-2 border-white'></img>
                  <span className='absolute -top-2 left-6 rounded-full bg-red-500 px-[6px] py-[2px] text-[10px] font-bold text-white'>3</span>
                  <span className='absolute bottom-0 left-6 h-3.5 w-3.5 bg-red-500 rounded-full border-2 border-white'></span>
                </div>
                <div className='relative'>
                  <img src='/images/Avatar02.png' alt='avatar02' width="35" className='rounded-full border-2 border-white'></img>
                  <span className='absolute bottom-0 left-6 h-3.5 w-3.5 bg-red-500 rounded-full border-2 border-white'></span>
                </div>
                <div className='relative'>
                  <img src='/images/Avatar03.png' alt='avatar02' width="35" className='rounded-full border-2 border-white'></img>
                  <span className='absolute -top-2 left-6 rounded-full bg-red-500 px-[6px] py-[2px] text-[10px] font-bold text-white'>5</span>
                  <span className='absolute bottom-0 left-6 h-3.5 w-3.5 bg-green-500 rounded-full border-2 border-white'></span>
                </div>
              </div>
              <div className='border-y-[1px] border-l-[1px] border-[#E9EBF0] p-[33px]'>
                <img src='/images/rightarr.svg' alt='addtask' width="20" className='cursor-pointer'></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
