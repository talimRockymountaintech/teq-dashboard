import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Grid3X3, Clock1, Shapes, PartyPopper, BadgeCheck, Truck, RefreshCwOff, MessageCircleMore } from "lucide-react";
import { activities, cardsData, data, dataGraph, options, optionsGraph, orders, tabs } from "../fakeDB";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "./CustomArrow";
import { Doughnut } from "react-chartjs-2";
import { ChevronDown, Calendar } from "lucide-react";
import { Reply, Mail } from "lucide-react";
import { Bar } from "react-chartjs-2";
import clsx from "clsx";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);


export default function DashboardTabs() {
    const [activeTab, setActiveTab] = useState("Dashboard");
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
        ],
    };
    const totalOrders = data.datasets[0].data.reduce((a, b) => a + b, 0);
    useEffect(() => {
        return () => {
            ChartJS.getChart("bar-chart")?.destroy();
        };
    }, []);
    return (
        <div className="p-4 border-border border rounded-lg mt-4 bg-background">
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b border-border pb-2">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-3 py-1 rounded-md text-sm font-medium ${activeTab === tab
                            ? "text-foreground"
                            : "text-primary hover:bg-gray-100"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <div className="">
                <Slider {...settings}>
                    {cardsData.map((card, index) => (
                        <div key={index} className="p-2">
                            <div className="rounded-2xl border border-border shadow-sm bg-background w-full">
                                {/* Top Section */}
                                <div className="flex items-center p-4 bg-primary-foreground rounded-2xl">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={card.icon}
                                            alt={card.title}
                                            className="w-14 h-14 rounded-xl"
                                        />
                                    </div>
                                    <div className="ml-4">
                                        <p className="text-sm text-primary">{card.title}</p>
                                        <p className="text-2xl font-bold text-primary">{card.value}</p>
                                    </div>
                                </div>

                                {/* Bottom Section */}
                                <div className="flex items-center justify-between border-t border-border p-4">
                                    <p
                                        className={`flex items-center text-sm ${card.direction === "up" ? "text-green-500" : "text-red-500"
                                            } font-medium`}
                                    >
                                        {card.direction === "up" ? (
                                            <TrendingUp className="h-4 w-4 mr-1" />
                                        ) : (
                                            <TrendingDown className="h-4 w-4 mr-1" />
                                        )}
                                        {card.change}
                                    </p>
                                    <p className="text-sm text-primary">{card.note}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Order Status or Recent Activitics */}
            <div className="grid grid-cols-12 gap-4">
                {/* Order */}
                <div className="col-span-12  xl:col-span-6  rounded-lg  bg-primary-foreground border-border border">
                    <div className="rounded-xl p-4 w-full">
                        {/* Header */}
                        <div className="flex justify-between items-center pb-4 border-b border-border">
                            <h2 className="text-lg font-semibold text-primary">Order Status</h2>
                            <div className="flex items-center gap-2">
                                <button className="flex items-center border-border border bg-background rounded-md px-2 py-1 text-sm text-primary">
                                    All Categories
                                    <ChevronDown className="w-4 h-4 ml-1" />
                                </button>
                                <button className="flex items-center   border-border border bg-background rounded-md px-2 py-1 text-sm text-primary">
                                    2023
                                    <Calendar className="w-4 h-4 ml-1" />
                                </button>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="grid grid-cols-12 gap-2 items-center">
                            {/* Status Grid */}
                            <div className="grid col-span-12 md:col-span-6 lg:col-span-8 xl:col-span-8 gap-2">
                                <div className="grid grid-cols-2 ">
                                    {[
                                        { label: "All", count: totalOrders, icon: <Shapes /> },
                                        { label: "New", count: 50, icon: <Clock1 /> },
                                        { label: "Pending", count: 50, icon: <PartyPopper /> },
                                        { label: "Dispatched", count: 50, icon: <Truck /> },
                                        { label: "Delivered", count: 123, icon: <BadgeCheck /> },
                                        { label: "Cancelled", count: 50, icon: <RefreshCwOff /> },
                                    ].map((item, idx) => (
                                        <div className={`px-5 py-8 flex border-border ${idx < 4 ?"border-b" : 0} ${idx % 2 !== 0 ? "border-l" : ""}`} key={idx}>
                                            {item.icon}
                                            <div className="mb-2 text-left pl-1">
                                                <p className="text-sm text-primary">{item.label}</p>
                                                <p className="text-xl font-semibold text-primary">{item.count}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Donut Chart */}
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-4 relative w-full h-48 flex justify-center items-center">
                                <Doughnut data={data} options={options} />
                                <div className="absolute text-xl font-bold text-primary">
                                    {totalOrders}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent */}
                <div className="col-span-12  xl:col-span-6 rounded-lg  bg-primary-foreground border-border border">

                    {/* Header */}
                    <div className="flex justify-between items-center p-4 border-b">
                        <h2 className="text-lg font-semibold text-primary">Recent Activities</h2>
                        <div className="flex gap-2">
                            <button className="border rounded px-3 py-1 text-sm font-medium hover:bg-gray-50 bg-background text-primary">
                                Message
                            </button>
                            <button className="border rounded px-3 py-1 text-sm font-medium hover:bg-gray-50 bg-background text-primary">
                                Email
                            </button>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="p-4 space-y-4">
                        {activities.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <p className="text-xs font-semibold text-primary uppercase mb-2 text-left">
                                    {section.date}
                                </p>
                                {section.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="ml-2 border-l border-border pl-4 relative text-left">
                                        {/* Colored dot */}
                                        <div
                                            className={clsx(
                                                "rounded-full absolute -left-3 top-0",
                                                item.color
                                            )}
                                        ><MessageCircleMore stroke="white" /></div>

                                        <p className="text-sm text-primary">
                                            <span className="font-medium text-foreground">{item.user}</span>{" "}
                                            {item.action}{" "}
                                            <span className="font-medium text-foreground">{item.target}</span>{" "}
                                            <span className="text-foreground">• {item.time}</span>
                                        </p>

                                        {/* Replies */}
                                        {item.replies?.map((reply, replyIdx) => (
                                            <div key={replyIdx} className="flex items-start mt-1 ml-4">
                                                <Reply className="w-4 h-4 text-primary mt-0.5 mr-1 flex-shrink-0" />
                                                <p className="text-sm text-primary">
                                                    <span className="font-medium">{reply.user}</span>{" "}
                                                    {reply.action}{" "}
                                                    <span className="text-foreground">{reply.target}</span>{" "}
                                                    <span className="text-primary">• {reply.time}</span>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {/* Recent Orders */}
            <div className="p-4 bg-primary-foreground rounded-xl border-border border mt-4 ">
                <h2 className="text-xl font-semibold  pb-2 border-border border-b text-left text-primary">Recent Orders</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-sm text-primary">
                        <thead>
                            <tr className="text-left border-b border-border">
                                <th className="py-2 px-4">ORDER ID</th>
                                <th className="py-2 px-4">PRODUCTS</th>
                                <th className="py-2 px-4">CUSTOMER</th>
                                <th className="py-2 px-4">CHANNEL</th>
                                <th className="py-2 px-4">TOTAL</th>
                                <th className="py-2 px-4">DELIVERY DATE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id} className="border-b border-borde">
                                    <td className="py-2 px-4 font-medium" >{order.id}</td>
                                    <td className="py-2 px-4 flex items-center gap-2">
                                        <img src={order.productImage} alt="Product" className="w-6 h-6 rounded" />
                                        x{order.quantity} {order.product}
                                    </td>
                                    <td ><div className="flex"><img src={order.customerAvatar} alt="Avatar" className="w-6 h-6 rounded-full mr-1" />
                                        {order.customer}</div></td>
                                    <td className="py-2 px-4">
                                        <img src={order.channelLogo} alt="Channel" className="h-5" />
                                    </td>
                                    <td className="py-2 px-4 font-semibold">{order.total}</td>
                                    <td className="py-2 px-4">{order.delivery}</td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="text-center mt-4">
                    <button className="text-sm hover:underline">View 256 more orders</button>
                </div>
            </div>
            {/* Revenue */}
            <div className="p-4 bg-primary-foreground rounded-xl border mt-4 ">
                <div className="flex justify-between items-center mb-4 flex-wrap">
                    <div className="flex gap-4 rounded-xl mb-2">
                        <button className="px-3 py-1 rounded-lg bg-background text-primary border">Revenue</button>
                        <button className="px-3 py-1 rounded-lg bg-background text-primary border">Orders</button>
                        <button className="px-3 py-1 rounded-lg bg-background text-primary border">Customers</button>
                    </div>
                    <div className="flex gap-2">
                        <select className="px-2 py-1 rounded-lg border bg-background border-border text-primary">
                            <option>All Categories</option>
                        </select>
                        <input type="month" value="2023-06" className="px-2 py-1 rounded-lg bg-background border border-border text-primary" />
                    </div>
                </div>
                <div className="text-right mt-2  text-primary">
                    Total Revenue: <span className="text-primary font-semibold">$89,235.89</span>
                </div>
                <div className="" style={{ height: '270px' }}>
                    <Bar id="bar-chart-2" data={dataGraph} options={optionsGraph} style={{ width: '100%', height: '100%' }} />

                </div>


            </div>
        </div >

    );
}
