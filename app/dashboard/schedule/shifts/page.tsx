'use client';

import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from '@heroicons/react/24/outline';

import user from '@/public/images/3d-illustration-human-avatar-profile_23-2150671128.jpg';
import Image from 'next/image';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import ShiftItem from '@/components/ShiftItem';

const Shifts = () => {
  const [nextWeekDays, setNextWeekDays] = useState<string[]>([]);

  function getNextWeekDays() {
    const today = dayjs();

    const monday = today.day(1);

    const startMonday = today.day() === 0 ? monday.subtract(1, 'week') : monday;

    const nextMonday = startMonday.add(1, 'week');

    const nextWeekDays = [];
    for (let i = 0; i < 7; i++) {
      nextWeekDays.push(nextMonday.add(i, 'day').format('DD-MM-YYYY'));
    }

    setNextWeekDays(nextWeekDays);
    return nextWeekDays;
  }

  useEffect(() => {
    getNextWeekDays();
  }, []);

  return (
    <div className="h-screen w-full">
      <div className="flex flex-col">
        <div className="mb-2 flex items-center justify-center">
          <div className="flex h-[50px] w-[350px] items-center justify-between rounded-full bg-gray-100">
            <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full">
              <ChevronLeftIcon className="w-5" />
            </div>
            <div className="flex">
              <span>May 8 - May 21 (2024)</span>
              <CalendarIcon className="ml-3 w-5" />
            </div>
            <div className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-gray-200">
              <ChevronRightIcon className="w-5" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex ">
            <div className="w-[100px] border-r-2 border-dashed border-gray-300 p-4 text-center">
              <span className="text-sm uppercase text-gray-500">Staff</span>
            </div>

            <div className="flex w-full justify-center">
              {nextWeekDays &&
                nextWeekDays.map((day, index) => (
                  <div
                    key={index}
                    className="flex-1 justify-center border-r-2 border-dashed border-gray-300 p-4 text-center"
                  >
                    <p className="text-sm uppercase text-gray-500">{day}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Shift 1 */}
          <div className="flex gap-1">
            <div className="w-[100px] rounded-3xl bg-gray-100 p-2">
              <div className="flex flex-col items-center">
                <Image
                  src={user}
                  alt="user"
                  height={40}
                  width={40}
                  className="rounded-full"
                />
                <span className="mt-2 text-xs font-bold">Nhật Hào</span>
              </div>
            </div>
            <div className="flex h-[80px] w-full rounded-3xl">
              <div className="flex flex-1 flex-col gap-1">
                <ShiftItem type="evening" />

                <ShiftItem type="morning" />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <ShiftItem type="custom" />
                <div className="flex h-1/2 w-full cursor-pointer items-center justify-center rounded-full border border-dashed border-gray-300 px-2 text-xs hover:border-black">
                  <PlusIcon className="w-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex h-1/2 w-full items-center justify-between rounded-full bg-green-100 px-2 text-xs">
                  <span className="font-bold">🟢 Moring</span>
                  <span>8AM - 3PM</span>
                </div>
                <div className="flex h-1/2 w-full items-center justify-between rounded-full bg-orange-100 px-2 text-xs">
                  <span className="font-bold">🟠 Evening</span>
                  <span>8AM - 3PM</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex h-1/2 w-full items-center justify-between rounded-full bg-sky-100 px-2 text-xs">
                  <span className="font-bold">🔵 Special</span>
                  <span>8AM - 3PM</span>
                </div>
                <div className="flex h-1/2 w-full cursor-pointer items-center justify-center rounded-full border border-dashed border-gray-300 px-2 text-xs hover:border-black">
                  <PlusIcon className="w-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex h-1/2 w-full items-center justify-between rounded-full bg-green-100 px-2 text-xs">
                  <span className="font-bold">🟢 Moring</span>
                  <span>8AM - 3PM</span>
                </div>
                <div className="flex h-1/2 w-full items-center justify-between rounded-full bg-orange-100 px-2 text-xs">
                  <span className="font-bold">🟠 Evening</span>
                  <span>8AM - 3PM</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex h-1/2 w-full items-center justify-between rounded-full bg-sky-100 px-2 text-xs">
                  <span className="font-bold">🔵 Special</span>
                  <span>8AM - 3PM</span>
                </div>
                <div className="flex h-1/2 w-full cursor-pointer items-center justify-center rounded-full border border-dashed border-gray-300 px-2 text-xs hover:border-black">
                  <PlusIcon className="w-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex h-1/2 w-full items-center justify-between rounded-full bg-green-100 px-2 text-xs">
                  <span className="font-bold">🟢 Moring</span>
                  <span>8AM - 3PM</span>
                </div>
                <div className="flex h-1/2 w-full items-center justify-between rounded-full bg-orange-100 px-2 text-xs">
                  <span className="font-bold">🟠 Evening</span>
                  <span>8AM - 3PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shifts;
