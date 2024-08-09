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
import Breadcrumb from '@/components/BreadCrumb';

const Shifts = () => {
  const [nextWeekDays, setNextWeekDays] = useState<string[]>([]);
  const [selectedShifts, setSelectedShifts] = useState<{
    morning: {
      [key: string]: { type: 'morning' | 'custom'; customTime?: string };
    };
    evening: {
      [key: string]: { type: 'evening' | 'custom'; customTime?: string };
    };
  }>({ morning: {}, evening: {} });
  const [showDropdown, setShowDropdown] = useState<{
    dayIndex: number;
    shiftType: 'morning' | 'evening' | null;
  } | null>(null);
  const [showCustomTimeInput, setShowCustomTimeInput] = useState<{
    dayIndex: number;
    shiftType: 'morning' | 'evening' | null;
  } | null>(null);
  const [customTime, setCustomTime] = useState<{
    [key: string]: { from: string; to: string };
  }>({});

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

  const handleShiftSelect = (
    dayIndex: number,
    shiftType: 'morning' | 'evening' | 'custom',
    timeOfDay: 'morning' | 'evening',
  ) => {
    if (shiftType === 'custom') {
      setShowDropdown(null);
      setShowCustomTimeInput({ dayIndex, shiftType: timeOfDay });
    } else {
      setSelectedShifts((prev) => ({
        ...prev,
        [timeOfDay]: {
          ...prev[timeOfDay],
          [dayIndex]: { type: shiftType },
        },
      }));
      setShowDropdown(null); // Close dropdown menu after selecting
    }
  };

  const handleCustomTimeSubmit = (
    dayIndex: number,
    shiftType: 'morning' | 'evening',
  ) => {
    if (customTime[dayIndex]) {
      setSelectedShifts((prev) => ({
        ...prev,
        [shiftType]: {
          ...prev[shiftType],
          [dayIndex]: {
            type: 'custom',
            customTime: `${customTime[dayIndex].from} - ${customTime[dayIndex].to}`,
          },
        },
      }));
      setShowCustomTimeInput(null);
    }
  };

  const handleShiftRemove = (
    dayIndex: number,
    shiftType: 'morning' | 'evening',
  ) => {
    setSelectedShifts((prev) => {
      const updatedShifts = { ...prev[shiftType] };
      delete updatedShifts[dayIndex];
      return { ...prev, [shiftType]: updatedShifts };
    });
  };

  const timeOptions = Array.from({ length: 16 }, (_, i) => `${8 + i}:00`);

  return (
    <div className="h-screen w-full">
      <div className="flex flex-col">
        <Breadcrumb />
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

          <div className="flex gap-1">
            <div className="w-[100px] rounded-3xl bg-gray-100 p-2">
              <div className="flex flex-col items-center">
                <Image
                  src={user}
                  alt="user"
                  height={40}
                  width={40}
                  className="rounded-full object-cover"
                />
                <span className="mt-2 text-xs font-bold">Nhật Hào</span>
              </div>
            </div>
            <div className="flex h-[80px] w-full flex-col gap-2 rounded-3xl">
              {/* Shift morning */}
              <div className="flex h-1/2 w-full gap-1">
                {nextWeekDays.map((_, dayIndex) => (
                  <div
                    className="flex h-full flex-1 flex-col gap-1"
                    key={dayIndex}
                  >
                    {selectedShifts.morning[dayIndex] ? (
                      <ShiftItem
                        type={selectedShifts.morning[dayIndex]!.type}
                        customTime={
                          selectedShifts.morning[dayIndex]?.customTime
                        }
                        onDoubleClick={() =>
                          handleShiftRemove(dayIndex, 'morning')
                        }
                      />
                    ) : (
                      <div className="relative h-full">
                        <div
                          className="flex h-full w-full cursor-pointer items-center justify-center rounded-full border border-dashed border-gray-300 px-2 text-xs hover:border-black"
                          onClick={() =>
                            setShowDropdown({ dayIndex, shiftType: 'morning' })
                          }
                        >
                          <PlusIcon className="w-5" />
                        </div>
                        {showDropdown?.dayIndex === dayIndex &&
                          showDropdown?.shiftType === 'morning' && (
                            <div className="absolute left-0 top-12 z-10 w-48 rounded-md border bg-white shadow-lg">
                              <ul className="py-1">
                                <li
                                  className="mb-2 flex cursor-pointer items-center justify-between gap-2 rounded-3xl bg-green-100 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-green-200"
                                  onClick={() =>
                                    handleShiftSelect(
                                      dayIndex,
                                      'morning',
                                      'morning',
                                    )
                                  }
                                >
                                  <div className="flex items-center gap-1">
                                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                    Morning
                                  </div>
                                  <span className="text-green-600">
                                    9h - 15h30
                                  </span>
                                </li>
                                <li
                                  className="flex cursor-pointer items-center justify-center  gap-2 rounded-3xl bg-sky-100 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-sky-200"
                                  onClick={() =>
                                    handleShiftSelect(
                                      dayIndex,
                                      'custom',
                                      'morning',
                                    )
                                  }
                                >
                                  <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                                  Custom
                                </li>
                              </ul>
                            </div>
                          )}
                        {showCustomTimeInput?.dayIndex === dayIndex &&
                          showCustomTimeInput?.shiftType === 'morning' && (
                            <div className="absolute left-0 top-12 z-10 w-48 rounded-md border bg-white p-4 shadow-lg">
                              <label className="block text-sm font-medium text-gray-700">
                                Custom Time
                              </label>
                              <select
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                value={customTime[dayIndex]?.from || ''}
                                onChange={(e) =>
                                  setCustomTime((prev) => ({
                                    ...prev,
                                    [dayIndex]: {
                                      ...prev[dayIndex],
                                      from: e.target.value,
                                    },
                                  }))
                                }
                              >
                                <option value="" disabled>
                                  Select from
                                </option>
                                {timeOptions.map((time) => (
                                  <option key={time} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </select>
                              <select
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                value={customTime[dayIndex]?.to || ''}
                                onChange={(e) =>
                                  setCustomTime((prev) => ({
                                    ...prev,
                                    [dayIndex]: {
                                      ...prev[dayIndex],
                                      to: e.target.value,
                                    },
                                  }))
                                }
                              >
                                <option value="" disabled>
                                  Select to
                                </option>
                                {timeOptions.map((time) => (
                                  <option key={time} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </select>
                              <button
                                className="mt-2 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() =>
                                  handleCustomTimeSubmit(dayIndex, 'morning')
                                }
                              >
                                Save
                              </button>
                            </div>
                          )}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Shift evening */}
              <div className="flex h-1/2 w-full gap-1">
                {nextWeekDays.map((_, dayIndex) => (
                  <div className="flex flex-1 flex-col " key={dayIndex}>
                    {selectedShifts.evening[dayIndex] ? (
                      <ShiftItem
                        type={selectedShifts.evening[dayIndex]!.type}
                        customTime={
                          selectedShifts.evening[dayIndex]?.customTime
                        }
                        onDoubleClick={() =>
                          handleShiftRemove(dayIndex, 'evening')
                        }
                      />
                    ) : (
                      <div className="relative h-full">
                        <div
                          className="flex h-full w-full cursor-pointer items-center justify-center rounded-full border border-dashed border-gray-300 px-2 text-xs hover:border-black"
                          onClick={() =>
                            setShowDropdown({ dayIndex, shiftType: 'evening' })
                          }
                        >
                          <PlusIcon className="w-5" />
                        </div>
                        {showDropdown?.dayIndex === dayIndex &&
                          showDropdown?.shiftType === 'evening' && (
                            <div className="absolute left-0 top-12 z-10 w-48 rounded-md border bg-white shadow-lg">
                              <ul className="py-1">
                                <li
                                  className="mb-2 flex cursor-pointer items-center justify-between gap-2 rounded-3xl bg-orange-100 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-200"
                                  onClick={() =>
                                    handleShiftSelect(
                                      dayIndex,
                                      'evening',
                                      'evening',
                                    )
                                  }
                                >
                                  <div className="flex items-center gap-1">
                                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                                    Evening
                                  </div>
                                  <span className="text-orange-600">
                                    9h - 15h30
                                  </span>
                                </li>
                                <li
                                  className="flex cursor-pointer items-center justify-center  gap-2 rounded-3xl bg-sky-100 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-sky-200"
                                  onClick={() =>
                                    handleShiftSelect(
                                      dayIndex,
                                      'custom',
                                      'morning',
                                    )
                                  }
                                >
                                  <div className="h-2 w-2 rounded-full bg-sky-500"></div>
                                  Custom
                                </li>
                              </ul>
                            </div>
                          )}
                        {showCustomTimeInput?.dayIndex === dayIndex &&
                          showCustomTimeInput?.shiftType === 'evening' && (
                            <div className="absolute left-0 top-12 z-10 w-48 rounded-md border bg-white p-4 shadow-lg">
                              <label className="block text-sm font-medium text-gray-700">
                                Custom Time
                              </label>
                              <select
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                value={customTime[dayIndex]?.from || ''}
                                onChange={(e) =>
                                  setCustomTime((prev) => ({
                                    ...prev,
                                    [dayIndex]: {
                                      ...prev[dayIndex],
                                      from: e.target.value,
                                    },
                                  }))
                                }
                              >
                                <option value="" disabled>
                                  Select from
                                </option>
                                {timeOptions.map((time) => (
                                  <option key={time} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </select>
                              <select
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                value={customTime[dayIndex]?.to || ''}
                                onChange={(e) =>
                                  setCustomTime((prev) => ({
                                    ...prev,
                                    [dayIndex]: {
                                      ...prev[dayIndex],
                                      to: e.target.value,
                                    },
                                  }))
                                }
                              >
                                <option value="" disabled>
                                  Select to
                                </option>
                                {timeOptions.map((time) => (
                                  <option key={time} value={time}>
                                    {time}
                                  </option>
                                ))}
                              </select>
                              <button
                                className="mt-2 w-full rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() =>
                                  handleCustomTimeSubmit(dayIndex, 'evening')
                                }
                              >
                                Save
                              </button>
                            </div>
                          )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shifts;
