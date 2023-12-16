
import React from 'react';
import FormAnggota from '../components/FormAnggota';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Header from '../components/Header';


  
export default async function cybersecurity() {
    const session = await getServerSession(authOptions);

  const limit = 4;

  return (
    <div>
    {/* <Header
        title={`Pendaftaran kompetisi`}
        name={session?.user?.name}
      /> */}

      <section className='flex justify-beetween bg-black w-[795px] m-[24px] p-[32px] rounded-md'>
        <div className="block">
          <div className="flex">
            <div className="mx-w-full block relative w-[153px]">
              <h2 className='text-white text-[18px] text-right'>Pilihan Bergabung</h2>
              <p className='text-gray-500 text-[16px] text-right'>Tim atau individu</p>
            </div>
            <div className="block ml-[20px]">
              <div className="bg-primary-500 text-white rounded-full px-5 py-3 m-auto text-[18px]">1</div> 
              <div className='h-[42px] w-[52px] block py-2'>
                <svg className='m-auto' width="2" height="42" viewBox="0 0 2 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0V42" stroke="#B10F00" stroke-width="1.8"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="mx-w-full block relative w-[153px]">
              <h2 className='text-white text-[18px] text-right'>Informasi Tim</h2>
              <p className='text-gray-500 text-[16px] text-right'>Data tim pendaftar</p>
            </div>
            <div className="block ml-[20px]">
              <div className="bg-primary-500 text-white rounded-full px-5 py-3 m-auto text-[18px]">2</div> 
              <div className='h-[42px] w-[52px] block py-2'>
                <svg className='m-auto' width="2" height="42" viewBox="0 0 2 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0V42" stroke="#B10F00" stroke-width="1.8"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="mx-w-full block relative w-[153px]">
              <h2 className='text-white text-[18px] text-right'>Informasi Anggota</h2>
              <p className='text-gray-500 text-[16px] text-right'>Data Anggota tim</p>
            </div>
            <div className="block ml-[20px]">
              <div className="bg-primary-500 text-white rounded-full px-5 py-3 m-auto text-[18px]">3</div> 
              <div className='h-[42px] w-[52px] block py-2'>
                <svg className='m-auto' width="2" height="42" viewBox="0 0 2 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 0V42" stroke="#656363" stroke-width="1.8"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="mx-w-full block relative w-[153px]">
              <h2 className='text-white text-[18px] text-right'>Bukti Pembayaran</h2>
              <p className='text-gray-500 text-[16px] text-right'>Screenshot</p>
            </div>
            <div className="block ml-[20px]">
              <div className="bg-black text-gray-600 border-2 border-gray-600 rounded-full px-5 py-3 m-auto text-[18px]">4</div> 
            </div>
          </div>
        </div>

        <div className="block w-[398px] ml-[62px] mr-[32px]">
        <FormAnggota limit={limit} wajib={false} /> 
          <p className='text-[14px] text-gray-500 mb-[16px]'>Step 3/4</p>
          <h2 className='text-[24px] text-white mb-[8px]'>Informasi Anggota</h2>
          <p className='text-[16px] text-gray-500'>Mohon untuk mengisi dengan benar dan teliti</p>
          <div className="flex justify-between">
            <h2 className='text-[16px] text-white mt-[28px] mb-[28px]'>Anggota tim<span> (2/4)</span></h2>
            <div className="flex justify-around">
              <button className="bg-primary-500 text-white rounded-full px-3 py-3 m-auto text-[18px] mr-[17px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 12H18" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 18V6" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <button className="bg-primary-500 text-white rounded-full px-3 py-3 m-auto text-[18px]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M6 12H18" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          <form action="">
            <input className='h-[54px] bg-black border-2 border-gray-500 rounded-lg px-[16px] w-[396px] mb-[14px]' type="text" name="NamaAnggota" id="NamaAnggota" placeholder='Nama Anggota'/>
            <div className="flex">
              <input className='h-[54px] bg-black border-2 border-gray-500 rounded-lg px-[16px] w-[352px] mb-[14px] mr-[14px]' type="text" name="textFotoAnggota" id="textFotoAnggota" placeholder='Foto Anggota'/>
              <input className=' hidden' type="file" name="FotoAnggota" id="FotoAnggota" />
              <label className='text-[16px] text-white' id='file-input-foto-anggota' htmlFor="FotoAnggota">Pilih file</label>
            </div>
            <div className="flex">
              <input className='h-[54px] bg-black border-2 border-gray-500 rounded-lg px-[16px] w-[352px] mr-[14px]' type="text" name="textKartuPelajar" id="textKartuPelajar" placeholder='Kartu Pelajar'/>
              <input className='hidden' type="file" name="KartuPelajar" id="KartuPelajar" />
              <label className='text-[16px] text-white' id='file-input-kartu-pelajar' htmlFor="KartuPelajar">pilih file</label>
            </div>
          </form>

          <hr className='mt-[32px] mb-[32px]'/>

          <form action="">
            <input className='h-[54px] bg-black border-2 border-gray-500 rounded-lg px-[16px] w-[396px] mb-[14px]' type="text" name="NamaAnggota" id="NamaAnggota" placeholder='Nama Anggota'/>
            <div className="flex">
              <input className='h-[54px] bg-black border-2 border-gray-500 rounded-lg px-[16px] w-[352px] mb-[14px] mr-[14px]' type="text" name="textFotoAnggota" id="textFotoAnggota" placeholder='Foto Anggota'/>
              <input className=' hidden' type="file" name="FotoAnggota" id="FotoAnggota" />
              <label className='text-[16px] text-white' id='file-input-foto-anggota' htmlFor="FotoAnggota">Pilih file</label>
            </div>
            <div className="flex">
              <input className='h-[54px] bg-black border-2 border-gray-500 rounded-lg px-[16px] w-[352px] mr-[14px]' type="text" name="textKartuPelajar" id="textKartuPelajar" placeholder='Kartu Pelajar'/>
              <input className='hidden' type="file" name="KartuPelajar" id="KartuPelajar" />
              <label className='text-[16px] text-white' id='file-input-kartu-pelajar' htmlFor="KartuPelajar">pilih file</label>
            </div>
          </form>

          <div className="mt-[48px] flex justify-end">
            <button type="button">
              <h6 className='text-[16px] text-white rounded-full bg-black border-2 border-gray-600 mr-[16px] px-7 py-3'>Sebelumnya</h6>
            </button>
            <button type="button">
              <h6 className='text-[16px] text-white rounded-full bg-primary-500 border-2 border-primary-400 px-7 py-3'>Selanjutnya</h6>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
