import { MessageCircleMore } from "lucide-react";

export const breadcrumbItems = [
    { label: "CRM", href: "/crm" },
    { label: "Account", href: "/crm/account" },
    { label: "Account Details" }, // current page, no href
];


export const cardsData = [
    {
        title: "Total Orders",
        value: "123",
        change: "28%",
        direction: "up",
        note: "From The Last Month",
        icon: "/bag.png",
    },
    {
        title: "Total Taken",
        value: "123",
        change: "15%",
        direction: "down",
        note: "From The Last Month",
        icon: "/lovehand.png",
    },
    {
        title: "Total Revenue",
        value: "123",
        change: "28%",
        direction: "up",
        note: "From The Last Month",
        icon: "/stack-icon.png",
    },
    {
        title: "Pending Orders",
        value: "$1234.99",
        change: "28%",
        direction: "down",
        note: "From The Last Month",
        icon: "/alarm-icon.png",
    },
    {
        title: "Pending Orders",
        value: "$1234.99",
        change: "28%",
        direction: "down",
        note: "From The Last Month",
        icon: "/progress-icon.png",
    },
];

export const tabs = [
    "Dashboard",
    "Orders",
    "Address",
    "Notes",
    "Tasks",
    "Contacts",
    "Credit History",
];

export const data = {
    labels: ["New", "Pending", "Dispatched", "Delivered", "Cancelled"],
    datasets: [
        {
            data: [50, 50, 50, 123, 50],
            backgroundColor: [
                "#f75d5f", // New
                "#f7a23b", // Pending
                "#fbc62f", // Dispatched
                "#0fca7a", // Delivered
                "#8378ff", // Cancelled
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#FFCE56",
                "#36A2EB",
                "#4BC0C0",
                "#9966FF",
            ],
            borderWidth: 0,
        },
    ],
};

export const options = {
    cutout: "65%", // Creates the donut hole
    plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
    },
    maintainAspectRatio: false,
};


export const activities = [
    {
        date: "Today",
        items: [
            {
                type: "message",
                user: "Christian Wood",
                action: "Sent Message to",
                target: "Nikita Houston",
                time: "1 min ago",
                color: "bg-orange-400",
                icon: <MessageCircleMore stroke="white" />,
                replies: [
                    {
                        user: "Nikita Houston",
                        action: "Replay your message",
                        target: '"Hello"',
                        time: "1 min ago",
                    },
                ],
            },
            {
                type: "order",
                user: "Christian Wood",
                action: "Accept Order from",
                target: "Ebay",
                time: "1 min ago",
                color: "bg-rose-400",
                replies: [
                    {
                        user: "Rohan Walker",
                        action: "Replay your message",
                        target: "Ebay",
                        time: "1 min ago",
                    },
                    {
                        user: "Rohan Walker",
                        action: "Replay your message",
                        target: "Ebay",
                        time: "1 min ago",
                    },
                ],
            },
        ],
    },
    {
        date: "Yesterday",
        items: [
            {
                type: "order",
                user: "Christian Wood",
                action: "Accept Order from",
                target: "Amazon",
                time: "12:30PM",
                color: "bg-purple-500",
            },
        ],
    },
    {
        date: "25 May 2024",
        items: [
            {
                type: "order",
                user: "Christian Wood",
                action: "Accept Order from",
                target: "Walmart",
                time: "11:20AM",
                color: "bg-sky-400",
            },
        ],
    },
];


export const orders = [
    {
        id: "415368",
        quantity: 4,
        product: "White Danim Tshit M...",
        productImage: "/tshirt.png",
        channel: "Walmart",
        channelLogo: "/walmart.png",
        customer: "Harris Santana",
        customerAvatar: "/Ellipse.png",
        total: "$151.00",
        delivery: "Today",
    },
    {
        id: "275936",
        quantity: 1,
        product: "iPhone 15 pro max",
        productImage: "/tshirt.png",
        customerAvatar: "/Ellipse.png",
        channelLogo: "/walmart.png",
        channel: "eBay",
        customer: "Gabriella Golden",
        total: "$400.00",
        delivery: "Today",
    },
    {
        id: "275063",
        quantity: 2,
        product: "David Beckham class...",
        productImage: "/tshirt.png",
        customerAvatar: "/Ellipse.png",
        channelLogo: "/walmart.png",
        channel: "Facebook",
        customer: "Lilia Ponce",
        total: "$167.00",
        delivery: "Tomorrow",
    },
    {
        id: "274778",
        quantity: 3,
        product: "Samsung i-20 serie...",
        productImage: "/tshirt.png",
        customerAvatar: "/Ellipse.png",
        channelLogo: "/walmart.png",
        channel: "Amazon",
        customer: "Rehan Chase",
        total: "$262.00",
        delivery: "Tomorrow",
    },
    {
        id: "638032",
        quantity: 5,
        product: "Nykaa Red lipstick",
        productImage: "/tshirt.png",
        customerAvatar: "/Ellipse.png",
        channelLogo: "/walmart.png",
        channel: "Etsy",
        customer: "Maxim Bray",
        total: "$319.00",
        delivery: "05/01/2023",
    },
];


export const dataGraph = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Revenue",
      data: [589.12, 840.20, 898.00, 203.00, 400.01, 920.12, 398.00, 882.00, 390.00, 910.00, 410.12, 840.20],
      backgroundColor: "#513cce",
      borderRadius: 0,
    },
  ],
};

export const optionsGraph = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { callbacks: { label: ctx => `$${ctx.parsed.y.toFixed(2)}` } },
    title: {
      display: true,
      text: 'Revenue',
      font: { size: 20 },
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { callback: value => `$${value}` },
    },
  },
};
