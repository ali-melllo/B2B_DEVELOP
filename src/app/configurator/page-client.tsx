'use client'

import { Button } from "@/components/ui/button";
import { changeShowFinalQuoteModal, changeView, resetAll } from "@/redux/globalSlice";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatEuroPrice } from "@/lib/utils";
import SubmitModal from "@/components/main/modals/submit-modal";


export default function PageClient() {

  const { showExterior, finalQuote, view, showInside, showFloor } = useSelector((state: any) => state.global);
  const [imageLoaded, setImageLoaded] = useState<boolean>(true);


  const dispatch = useDispatch();

  useEffect(() => {
    setImageLoaded(false);
  }, [showExterior, view, showInside , showFloor]);

  const changeViewHandler = useCallback((view: string) => {
    dispatch(changeView(view));
  }, [dispatch])

  const getExteriorPrice = useCallback(() => {
    return finalQuote.exterior.reduce((total: any, item: any) => total + (Number(item.price) || 0), 0);
  }, [finalQuote]);

  const getInsidePrice = useCallback(() => {
    return finalQuote.interior.reduce((total: any, item: any) => total + (Number(item.price) || 0), 0);
  }, [finalQuote]);


  return (
    <main className="relative overflow-hidden shadow-2xl flex max-h-[40vh] md:max-h-screen h-6/12 md:h-screen">

      <div className="flex cursor-pointer gap-x-3 absolute z-50 left-3 top top-[5.5em]">
        <div onClick={() => changeViewHandler('floor')} className="size-[2.75em] md:size-20 flex flex-col transition-all duration-200 justify-between hover:scale-105 rounded-xl shadow-xl">
          <img
            className={`w-full h-full object-cover rounded-t-lg`}
            src={'/main-floor.jpg'}
            alt={'exterior'}
          />
          <p className="pointer-events-none text-[0.6em] md:text-base w-full flex justify-center items-center font-bold rounded-b-lg bg-white text-black">Floor</p>
        </div>
        <div onClick={() => changeViewHandler('exterior')} className="size-[2.75em] md:size-20 flex flex-col transition-all duration-200 justify-between hover:scale-105 rounded-xl shadow-xl">
          <img
            className={`w-full h-full object-cover rounded-t-lg`}
            src={'/main.png'}
            alt={'exterior'}
          />
          <p className="pointer-events-none text-[0.6em] md:text-base w-full flex justify-center items-center font-bold rounded-b-lg bg-white text-black">Exterior</p>
        </div>
        <div onClick={() => changeViewHandler('inside')} className="size-[2.75em] md:size-20 flex flex-col transition-all duration-200 justify-between hover:scale-105 rounded-xl shadow-xl">
          <img
            className={`w-full h-full object-cover rounded-t-lg`}
            src={'/main-inside.png'}
            alt={'exterior'}
          />
          <p className="pointer-events-none text-[0.6em] md:text-base w-full flex justify-center items-center font-bold rounded-b-lg bg-white text-black">Inside</p>
        </div>

      </div>

      {formatEuroPrice(getInsidePrice() + getExteriorPrice()) !== '0'
        && <div className="ESTIMATED_PRICE text-sm md:text-base hidden md:flex gap-x-5 items-center absolute top-[5.5em] px-5 py-4 rounded-xl z-50 right-3 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
          <Button onClick={() => dispatch(changeShowFinalQuoteModal(true))} className="bg-primary h-6 rounded-2xl">
            See Details
          </Button>
          <p className="font-semibold">Estimated Price : </p>
          <p className="font-bold text-primary">€  {formatEuroPrice((getInsidePrice() + getExteriorPrice() || '0'))}</p>
        </div>}

      <img
        className={`inset-0 mt-16 md:mt-0 ${imageLoaded ? 'animate-none' : 'animate-pulse'} w-full h-full object-cover z-10`}
        onLoad={() => {
          setImageLoaded(true);
        }}
        key={view}
        src={`${view === 'exterior' ? '/main.png' : view === 'inside' ? '/main-inside.png' : view === 'floor' ? '/main-floor.jpg' : ''}?v=${Date.now()}`}
        alt={'exterior'}
      />

      {view === 'exterior' &&
        (
          finalQuote.exterior.map((item: any) => (
            <img
              key={item.key}
              onLoad={() => {
                setImageLoaded(true);
              }}
              className={`absolute mt-16 md:mt-0 inset-0 md:w-full md:h-full object-cover ${item.key === 'outdoor-light' ? 'z-30' : 'z-20'}`}
              src={item.objectSrc}
              alt={'exterior'}
            />
          ))
        )}

      {view === 'inside' && (
        finalQuote.interior.map((item: any) => (
          <img
            key={item.key}
            onLoad={() => setImageLoaded(true)}
            className={`absolute mt-16 md:mt-0 inset-0 md:w-full md:h-full object-cover ${item.key === 'outdoor-light' ? 'z-30' : 'z-20'}`}
            src={item.objectSrc}
            alt={'exterior'}
          />
        ))
      )}

      {view === 'floor' && (
        finalQuote.floor.map((item: any) => (
          <img
            key={item.key}
            onLoad={() => setImageLoaded(true)}
            className={`absolute mt-16 md:mt-0 inset-0 md:w-full md:h-full object-cover ${item.key === 'outdoor-light' ? 'z-30' : 'z-20'}`}
            src={item.objectSrc}
            alt={'exterior'}
          />
        ))
      )}

      <SubmitModal />

    </main>
  );
}