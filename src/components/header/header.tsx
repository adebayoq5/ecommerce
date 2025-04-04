/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'
import {
    Bars3Icon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    UserIcon,
    HomeIcon,
    ShoppingBagIcon,
    XMarkIcon,
    ChartBarIcon,
    ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Order', href: '#', icon: ShoppingBagIcon, current: false },
    { name: 'Customers', href: '#', icon: UserIcon, current: false },
    { name: 'Analytics', href: '#', icon: ChartBarIcon, current: false },
    { name: 'Calender', href: '#', icon: CalendarIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
]

function classNames(...classes: (string | boolean | undefined)[]): string {
    return classes.filter(Boolean).join(' ')
}

export default function HeaderBar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const router = useRouter()

    const handleSignOut = () => {
        // Clear authentication state
        localStorage.removeItem('isAuthenticated')
        // Redirect to auth page
        router.push('/login')
    }

    const userNavigation = [
        { name: 'Your profile', href: '#' },
        { 
            name: 'Sign out', 
            onClick: handleSignOut,
            icon: ArrowLeftOnRectangleIcon 
        },
    ]

    return (
        <>
            <header className="bg-gradient-to-b from-green-900 to-green-600 text-white shadow-md sticky top-0 z-50 border-b border-gray-200">
                <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                    <button
                        type="button"
                        onClick={() => setSidebarOpen(true)}
                        className="lg:hidden p-2.5 text-gray-700 hover:text-indigo-600 transition"
                    >
                        <Bars3Icon className="w-6 h-6" />
                    </button>

                    <div className="relative w-full max-w-md">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="w-full px-4 py-2 text-sm border rounded-lg shadow-sm focus:ring focus:ring-indigo-300"
                        />
                        <MagnifyingGlassIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2.5 text-gray-400 hover:text-indigo-600 transition">
                            <BellIcon className="w-6 h-6" />
                        </button>

                        <Menu as="div" className="relative">
                            <MenuButton className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition">
                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    className="w-8 h-8 rounded-full"
                                    alt="User Avatar"
                                />
                                <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                            </MenuButton>
                            <MenuItems className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 py-1 z-50">
                                {userNavigation.map((item) => (
                                    <MenuItem key={item.name}>
                                        {({ active }) => (
                                            <button
                                                onClick={item.onClick}
                                                className={classNames(
                                                    active ? 'bg-gray-100' : '',
                                                    'w-full text-left px-4 py-2 text-sm text-gray-700 flex items-center gap-2'
                                                )}
                                            >
                                                {item.icon && <item.icon className="w-4 h-4" />}
                                                {item.name}
                                            </button>
                                        )}
                                    </MenuItem>
                                ))}
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </header>

            <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
                <DialogBackdrop className="fixed inset-0 bg-gray-900/80" />
                <div className="fixed inset-0 flex">
                    <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1 bg-white p-6">
                        <button type="button" onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4">
                            <XMarkIcon className="w-6 h-6 text-gray-600" />
                        </button>
                        <nav className="mt-10">
                            <ul>
                                {navigation.map((item) => (
                                    <li key={item.name} className="mb-4">
                                        <a href={item.href} className="flex items-center gap-3 text-gray-700 hover:text-indigo-600">
                                            <item.icon className="w-6 h-6" />
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}