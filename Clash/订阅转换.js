// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "text",
  "interval": 86400
};

// 策略组通用配置
const groupBaseOption = {
  "interval": 300,
  "url": "http://connectivitycheck.gstatic.com/generate_204",
  "max-failed-times": 3,
};

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖通用配置
  config["mixed-port"] = "7893";
  config["tcp-concurrent"] = true;
  config["allow-lan"] = false;
  config["ipv6"] = false;
  config["udp"] = true;
  config["unified-delay"] = true;
  config["mode"] = "rule";
  config["log-level"] = "info";
  config["find-process-mode"] = "strict";
  config["global-client-fingerprint"] = "chrome";

  // 覆盖 dns 配置
  config["dns"] = {
    "enable": true,
    "prefer-h3": true,
    "listen": "0.0.0.0:1053",
    "ipv6": false,
    "enhanced-mode": "fake-ip",
    "fake-ip-range": "198.18.0.1/16",
    "fake-ip-filter": ["*", "+.lan", "+.local", "+.direct", "+.msftconnecttest.com", "+.msftncsi.com"],
    "default-nameserver": ["223.5.5.5", "119.29.29.29"],
    "nameserver": ["223.5.5.5", "119.29.29.29", "180.184.1.1"],
    "nameserver-policy": {
      "geosite:cn": "system",
      "geosite:gfw,geolocation-!cn": ["quic://223.5.5.5", "quic://223.6.6.6", "https://1.12.12.12/dns-query", "https://120.53.53.53/dns-query"]
    }
  };

  // 覆盖 geodata 配置
  config["geodata-mode"] = true;
  config["geo-auto-update"] = true;
  config["geo-update-interval"] = 48;
  config["geox-url"] = {
    "geoip": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geoip-lite.dat",
    "geosite": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/geosite.dat",
    "mmdb": "https://mirror.ghproxy.com/https://github.com/MetaCubeX/meta-rules-dat/releases/download/latest/country-lite.mmdb",
    "asn": "https://mirror.ghproxy.com/https://github.com/xishang0128/geoip/releases/download/latest/GeoLite2-ASN.mmdb"
  };

  // 覆盖 sniffer 配置
  config["sniffer"] = {
    "enable": true,
    "force-dns-mapping": true,
    "parse-pure-ip": true,
    "override-destination": true,
    "sniff": {
      "TLS": {
        "ports": ["443", "8443"]
      },
      "HTTP": {
        "ports": ["80", "8080-8880"],
        "override-destination": true
      },
      "QUIC": {
        "ports": ["443", "8443"]
      }
    }
  };

  // 覆盖 tun 配置
  config["tun"] = {
    "enable": true,
    "auto-route": true,
    "auto-detect-interface": true,  
    "stack": "mixed",
    "dns-hijack": ["any:53"]
  };

  // 覆盖策略组
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      "name": "全球加速",
      "type": "select",
      "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "特殊节点"],
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Global.png"
    },
    {
      ...groupBaseOption,
      "name": "电报代理",
      "type": "select",
      "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "特殊节点"],
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Telegram.png"
    },
    {
      ...groupBaseOption,
      "name": "影视服务",
      "type": "select",
      "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "DIRECT"],
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Emby.png"
    },
    {
      ...groupBaseOption,
      "name": "人工智能",
      "type": "select",
      "proxies": ["台湾节点", "日本节点", "狮城节点", "美国节点", "特殊节点"],
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Available.png"
    },
    {
      ...groupBaseOption,
      "name": "国际媒体",
      "type": "select",
      "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "特殊节点"],
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Streaming.png"
    },
    {
      ...groupBaseOption,
      "name": "谷歌服务",
      "type": "select",
      "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "特殊节点"],
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Google.png"
    },
    {
      ...groupBaseOption,
      "name": "微软服务",
      "type": "select",
      "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "特殊节点", "DIRECT"],
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Microsoft.png"
    },
    {
      ...groupBaseOption,
      "name": "苹果服务",
      "type": "select",
      "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "特殊节点", "DIRECT"],
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Apple.png"
    },
    {
      ...groupBaseOption,
      "name": "港台番剧",
      "type": "select",
      "proxies": ["香港节点", "台湾节点", "DIRECT"],
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/StreamingSE.png"
    },
    {
      ...groupBaseOption,
      "name": "广告拦截",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Adblock.png"
    },
    {
      ...groupBaseOption,
      "name": "黑白名单",
      "type": "select",
      "proxies": ["香港节点", "台湾节点", "日本节点", "狮城节点", "美国节点", "特殊节点"],
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Final.png"
    },

    // 地区分组
    {
      ...groupBaseOption,
      "name": "香港节点",
      "type": "url-test",
      "tolerance": 0,
      "include-all": true,
      "filter": "(?i)🇭🇰|香港|(\b(HK|Hong)\b)",
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/HK.png"
    },
    {
      ...groupBaseOption,
      "name": "台湾节点",
      "type": "url-test",
      "tolerance": 0,
      "include-all": true,
      "filter": "(?i)🇹🇼|台湾|(\b(TW|Tai|Taiwan)\b)",
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/TW.png"
    },
    {
      ...groupBaseOption,
      "name": "日本节点",
      "type": "url-test",
      "tolerance": 0,
      "include-all": true,
      "filter": "(?i)🇯🇵|日本|东京|(\b(JP|Japan)\b)",
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/JP.png"
    },
    {
      ...groupBaseOption,
      "name": "狮城节点",
      "type": "url-test",
      "tolerance": 0,
      "include-all": true,
      "filter": "(?i)🇸🇬|新加坡|狮|(\b(SG|Singapore)\b)",
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/SG.png"
    },
    {
      ...groupBaseOption,
      "name": "美国节点",
      "type": "url-test",
      "tolerance": 0,
      "include-all": true,
      "filter": "(?i)🇺🇸|美国|洛杉矶|圣何塞|(\b(US|United States)\b)",
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/US.png"
    },
    {
      ...groupBaseOption,
      "name": "特殊节点",
      "type": "url-test",
      "tolerance": 0,
      "include-all": true,
      "exclude-filter": "港|台|狮|本|新|美|距离|到期|重置|剩余|Traffic|Reset|Expire|Date|GB|HK|TW|JP|SG|US|Hong|Taiwan|Japan|Singapore|States",
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/XD.png"
    },
    {
      ...groupBaseOption,
      "name": "GLOBAL",
      "type": "select",
      "include-all": true,
      "icon": "https://raw.githubusercontent.com/Orz-3/mini/master/Color/Static.png"
    }
  ];

  // 覆盖规则集
  config["rule-providers"] = {
    "AD": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/L-csing/SM/main/Clash/Rules/Reject.list",
      "path": "./rules/AD.list"
    },
    "Telegram": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/L-csing/SM/main/Clash/Rules/Telegram.list",
      "path": "./rules/Telegram.list"
    },
    "Emby": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/L-csing/SM/main/Clash/Rules/Emby.list",
      "path": "./rules/Emby.list"
    },
    "OpenAI": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/L-csing/SM/main/Clash/Rules/OpenAI.list",
      "path": "./rules/OpenAI.list"
    },
    "Media": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/L-csing/SM/main/Clash/Rules/Media.list",
      "path": "./rules/Media.list"
    },
    "Google": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/L-csing/SM/main/Clash/Rules/Google.list",
      "path": "./rules/Google.list"
    },
    "Apple": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/L-csing/SM/main/Clash/Rules/Apple.list",
      "path": "./rules/Apple.list"
    },
    "Gtfj": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/L-csing/SM/main/Clash/Rules/Gtfj.list",
      "path": "./rules/Gtfj.list"
    },
    "China": {
      ...ruleProviderCommon,
      "behavior": "classical",
      "url": "https://raw.githubusercontent.com/L-csing/SM/main/Clash/Rules/ChinaDomain.list",
      "path": "./rules/China.list"
    }
  };

  // 覆盖规则
  config["rules"] = [
    "RULE-SET,AD,广告拦截",
    "RULE-SET,Telegram,电报代理",
    "RULE-SET,Media,国际媒体 ", 
    "RULE-SET,Google,谷歌服务",
    "RULE-SET,Emby,影视服务",
    "RULE-SET,OpenAI,人工智能",
    "RULE-SET,Gtfj,港台番剧",
    "RULE-SET,Apple,苹果服务", 
    "GEOSITE,onedrive,微软服务",
    "GEOSITE,github,微软服务",
    "GEOSITE,microsoft,微软服务",
    "GEOSITE,gfw,全球加速",
    "RULE-SET,China,DIRECT",
    "GEOIP,CN,DIRECT",
    "MATCH,黑白名单"
  ];

  // 返回修改后的配置
  return config;
}
