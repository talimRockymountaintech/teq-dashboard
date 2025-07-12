import React from "react";
import Input from './ui/Input';
import { Phone, Mail, MessageSquare, Calendar, Save, Plus } from "lucide-react";
import { Button } from "./ui/button";


export default function Sidebar() {
    return (
        <div className="space-y-4 p-4">
            <div className="flex items-start justify-between rounded-lg border-[1px] p-4  bg-background">
                <div className="flex items-center space-x-3">
                    <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground text-white font-bold text-2xl">
                        TG
                        <span className="absolute bottom-[-2px] w-full text-center text-xs font-normal bg-[#392e98] rounded-b-full py-2">Edit</span>
                        <span className="absolute top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                    <div>
                        <div className="font-semibold text-primary">Truck Grear <span className="ml-1 text-xs bg-[#fdf4e9] text-[#e48d21] px-2 py-1 rounded-lg ">BUSINESS</span></div>
                        <div className="text-sm text-gray-500">jillali@onechanneladmin.com</div>
                    </div>
                </div>
                <button className="text-xs hover:underline">Change Status</button>
            </div>
            <div className="grid grid-cols-4 gap-4 text-center border rounded-lg p-4 bg-background">
                <div className="flex flex-col items-center space-y-1 border-r">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-xs text-primary" >Email</span>
                </div>
                <div className="flex flex-col items-center space-y-1 border-r">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-xs text-primary">Call</span>
                </div>
                <div className="flex flex-col items-center space-y-1 border-r">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <span className="text-xs text-primary">Message</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-xs text-primary">Calendar</span>
                </div>
            </div>

            {/* Business Details Form */}
            <div className="border rounded-lg p-4 space-y-4 bg-background">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-primary">Business Details</h2>
                    <button className="text-green-600 font-medium flex items-center space-x-1">
                        <div className="flex gap-2"><Save /> Save & Close</div>
                    </button>
                </div>

                <div className="space-y-2 text-left">
                    <div className="border-b pb-2 space-y-2">
                        <label className="text-sm text-primary">Account Name</label>
                        <Input placeholder="TRUCK GEAR" defaultValue="TRUCK GEAR" />
                    </div>
                    <div className="border-b pb-2 space-y-2">
                        <label className="text-sm text-primary">Email</label>
                        <Input placeholder="Email" defaultValue="Jillali@Onechanneladmin.Com" />
                    </div >
                    <div className="border-b pb-2 space-y-2">
                        <div className="flex items-center justify-between">
                            <label className="text-sm text-primary">Phone Number</label> <Plus /></div>

                        <div className="space-y-2">
                            {[1, 2].map((num) => (
                                <div key={num} className="flex items-center space-x-2">
                                    <div className="flex items-center border rounded px-2 py-1 space-x-1">
                                        <img src="https://flagcdn.com/us.svg" alt="US" className="w-5 h-5" />
                                        <span className="text-sm text-primary">US</span>
                                    </div>
                                    <Input className="flex-1" defaultValue="+1 344 434 4455" />
                                    <Button className="text-red-600 hover:bg-red-200 bg-inherit border-red-600 border rounded-lg">Remove</Button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <label className="text-sm text-primary">Contact Owner</label>
                    <Input defaultValue="Suchithkumar@Onechanneladmin.Com" />
                </div>
            </div>
        </div>
    );
}