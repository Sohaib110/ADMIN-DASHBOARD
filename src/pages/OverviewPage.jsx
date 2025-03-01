import React from "react";
import Header from "../components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../components/common/StatCard";
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";

const OverviewPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10 ">
      <Header title="Overview" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-20">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Sales"
            icon={Zap}
            value="$13,456"
            color="#6366F1"
          />
          <StatCard
            name="New Users"
            icon={Users}
            value="1234"
            color="#8B5CF6"
          />
          <StatCard
            name="Total Products"
            icon={ShoppingBag}
            value="567"
            color="#EC4899"
          />
          <StatCard
            name="Conversion Rate"
            icon={BarChart2}
            value="12.6%"
            color="#10B981"
          />
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesOverviewChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
