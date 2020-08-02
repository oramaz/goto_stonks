import React, { useState, useEffect } from "react"
import TerminalService from "../services/TerminalService";

const service = new TerminalService();

const News = () => {
    const [newsData, setNewsData] = useState<{name: string, text: string}[]>([])


    const getNewsData = () => {
        service.getNews()
        .then((res) => setNewsData(res)).catch((e) => alert(e))
    }

    useEffect(() => {
        getNewsData()
    }, [])

    console.log(newsData)
    return <div>
        <div className="news"
        >
            <div style={{marginBottom: "15px"}}>
              <span className="block-title">Новости</span>
                </div>
            {newsData.map(x => {
                return (
                    <div className="news-item" style={{marginBottom: "10px"}}>
                        <div style={{fontSize: "12px", marginBottom: "5px", color: "gray"}}>{x.name}</div>
                        <div style={{fontSize: "14px"}}>{x.text}</div>
                     </div>   
                )
            })}
        </div>
    </div>
}

export default News