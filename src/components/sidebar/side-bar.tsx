/* eslint-disable @next/next/no-img-element */

import {
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    ShoppingBagIcon,
    UserIcon,
    HomeIcon,
    ChartBarIcon,
} from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: false },
    { name: 'Order', href: '/order', icon: ShoppingBagIcon, current: false },
    { name: 'Customers', href: '/customers', icon: UserIcon, current: false },
    { name: 'Analytics', href: '/analytics', icon: ChartBarIcon, current: false },
    { name: 'Calender', href: '#', icon: CalendarIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

const teams = [
    { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
    { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
    { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]

function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
    return (
        <>
            {/* Header */}
            {/* <header className="bg-gradient-to-r from-blue-900 to-blue-600 text-white shadow-md p-4 flex justify-between items-center">
                <h1 className="text-lg font-semibold">E-Commerce Dashboard</h1>
                <div className="flex items-center gap-4">
                    <button className="bg-blue-700 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                        Profile
                    </button>
                    <button className="bg-blue-700 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
                        Logout
                    </button>
                </div>
            </header> */}

            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col bg-gradient-to-b from-green-900 to-green-600 text-white">
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-transparent px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                        <img
                            alt="Your Company"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            className="h-8 w-auto"
                        />
                    </div>
                    <nav className="flex flex-1 flex-col">
                        <ul role="list" className="flex flex-1 flex-col gap-y-7">
                            <li>
                                <ul role="list" className="-mx-2 space-y-1">
                                    {navigation.map((item) => (
                                        <li key={item.name}>
                                            <a
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? 'bg-blue-700 text-white'
                                                        : 'text-white hover:bg-blue-500 hover:text-white',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                )}
                                            >
                                                <item.icon
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        item.current ? 'text-white' : 'text-gray-300 group-hover:text-white',
                                                        'size-6 shrink-0',
                                                    )}
                                                />
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li>
                                <div className="text-xs/6 font-semibold text-gray-300">Your teams</div>
                                <ul role="list" className="-mx-2 mt-2 space-y-1">
                                    {teams.map((team) => (
                                        <li key={team.name}>
                                            <a
                                                href={team.href}
                                                className={classNames(
                                                    team.current
                                                        ? 'bg-blue-700 text-white'
                                                        : 'text-white hover:bg-blue-500 hover:text-white',
                                                    'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                                                )}
                                            >
                                                <span
                                                    className={classNames(
                                                        team.current
                                                            ? 'border-white text-white'
                                                            : 'border-gray-300 text-gray-200 group-hover:border-white group-hover:text-white',
                                                        'flex size-6 shrink-0 items-center justify-center rounded-lg border bg-transparent text-[0.625rem] font-medium',
                                                    )}
                                                >
                                                    {team.initial}
                                                </span>
                                                <span className="truncate">{team.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                            <li className="mt-auto">
                                <a
                                    href="#"
                                    className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-white hover:bg-blue-500 hover:text-white"
                                >
                                    <Cog6ToothIcon
                                        aria-hidden="true"
                                        className="size-6 shrink-0 text-gray-300 group-hover:text-white"
                                    />
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
