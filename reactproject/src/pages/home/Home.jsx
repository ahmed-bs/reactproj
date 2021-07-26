import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../CData"
import WidgetLg from "../../components/WidgetLg/WidgetLg.jsx"
import WidgetSml from "../../components/WidgetSml/WidgetSml.jsx"
export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSml/>

                <WidgetLg/>
            </div>
        </div>
    )
}
