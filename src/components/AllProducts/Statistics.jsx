import { useEffect, useState } from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
    PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088FE', '#00C49F'];

const Statistics = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/gadgets.json')
            .then(res => res.json())
            .then(json => setData(json));
    }, []);

    // For PieChart: Category distribution
    const categoryStats = data.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
    }, {});

    const pieData = Object.entries(categoryStats).map(([key, value]) => ({
        name: key,
        value,
    }));

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Product Statistics</h2>

            {/* Price Chart */}
            <div className="bg-white shadow-md rounded-lg p-4 mb-10">
                <h3 className="text-xl font-semibold mb-4">Product Price Comparison</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="product_title" tick={{ fontSize: 12 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Category Pie Chart */}
            <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-4">Category Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={120}
                            dataKey="value"
                        >
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
