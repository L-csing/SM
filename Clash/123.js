function main() {
    const groupBaseOption = {
        "interval": 300,
        "url": "http://www.gstatic.com/generate_204"
    };

    const proxyGroups = [
        {
            "name": "全球加速",
            "type": "select",
            "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "特殊节点"],
            "include-all": true,
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Global.png"
        },
        {
            "name": "电报代理",
            "type": "select",
            "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "特殊节点"],
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Telegram.png"
        },
        {
            "name": "海外抖音",
            "type": "select",
            "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "特殊节点"],
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/TikTok.png"
        },
        {
            "name": "影视服务",
            "type": "select",
            "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "特殊节点"],
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Emby.png"
        },
        {
            "name": "国际媒体",
            "type": "select",
            "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "特殊节点"],
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Streaming.png"
        },
        {
            "name": "谷歌服务",
            "type": "select",
            "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "特殊节点"],
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Google.png"
        },
        {
            "name": "微软服务",
            "type": "select",
            "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "DIRECT"],
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Microsoft.png"
        },
        {
            "name": "苹果服务",
            "type": "select",
            "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "DIRECT"],
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Apple.png"
        },
        {
            "name": "港台番剧",
            "type": "select",
            "proxies": ["香港节点", "台湾节点", "DIRECT"],
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/StreamingSE.png"
        },
        {
            "name": "广告拦截",
            "type": "select",
            "proxies": ["REJECT", "DIRECT"],
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Adblock.png"
        },
        {
            "name": "黑白名单",
            "type": "select",
            "proxies": ["全球加速", "DIRECT"],
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Final.png"
        },
        {
            "name": "香港节点",
            "type": "url-test",
            "tolerance": 0,
            "url": "http://www.gstatic.com/generate_204",
            "proxies": [],
            "filter": "(?i)🇭🇰|香港|(\b(HK|Hong)\b)",
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/HK.png"
        },
        {
            "name": "台湾节点",
            "type": "url-test",
            "tolerance": 0,
            "url": "http://www.gstatic.com/generate_204",
            "proxies": [],
            "filter": "(?i)🇹🇼|台湾|(\b(TW|Taiwan)\b)",
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/TW.png"
        },
        {
            "name": "日本节点",
            "type": "url-test",
            "tolerance": 0,
            "url": "http://www.gstatic.com/generate_204",
            "proxies": [],
            "filter": "(?i)🇯🇵|日本|东京|(\b(JP|Japan)\b)",
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/JP.png"
        },
        {
            "name": "狮城节点",
            "type": "url-test",
            "tolerance": 0,
            "url": "http://www.gstatic.com/generate_204",
            "proxies": [],
            "filter": "(?i)🇸🇬|新加坡|狮|(\b(SG|Singapore)\b)",
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/SG.png"
        },
        {
            "name": "美国节点",
            "type": "url-test",
            "tolerance": 0,
            "url": "http://www.gstatic.com/generate_204",
            "proxies": [],
            "filter": "(?i)🇺🇸|美国|洛杉矶|圣何塞|(\b(US|United States)\b)",
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/US.png"
        },
        {
            "name": "特殊节点",
            "type": "url-test",
            "tolerance": 0,
            "url": "http://www.gstatic.com/generate_204",
            "proxies": [],
            "filter": "^((?!(港|台|狮城|本|新|美|距|HK|TW|JP|SG|US|Hong|Taiwan|Japan|Singapore|States)).)*$",
            "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/XD.png"
        }
    ];

    // 将 proxyGroups 分配到 config 中
    config["proxy-groups"] = proxyGroups;
}

// 执行主函数
main();
