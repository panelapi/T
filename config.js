// 配置对象，包含应用程序或服务的相关信息
window.EnvConfig = {
    serverUrl: 'https://www.forestnet.cc',
    appName: 'SeeWorld', // 应用程序名称
    appLogo: './favicon.svg', // 应用程序图标 (空)
    
    iosUrl: 'https://apps.apple.com/ca/app/shadowrocket/id932747118', // iOS 应用的下载链接
    iosVersion: '下载VPN节点连接程序', // iOS 版本信息
    iosName: 'Shadowrocket', // iOS 应用名称
    iosHtmlTitle: '点击查看我们为阁下准备的共享海外ID', // iOS 指导内容的标题
    iosHtmlContent: `
        <div class="note">
            <h2>退出AppStore商店ID账号</h2>
            <p>Shadowrocket（小火箭）无法在中国大陆<strong> App Store</strong> 下载，
            我们为您提供了用于下载该应用的 <strong>Apple ID</strong>，如您已经安装该应用可直接跳过此步骤。</p>
            <img src="/img/tchu.png" alt="" width="100%">
            <h2>共享美区AppStore商店ID账号</h2>
            <object data="https://forest8hf4hf4if4.laogou.cx/p/22bf7aa81bf26a573d3e520556e2a445" width="100%" height="185"></object>
        </div>
            <h2>登录AppStore商店ID账号</h2>
            <img src="/img/dlu.png" alt="" width="100%">
            <p>我们提供的 Apple ID，请<strong>仅登录到 App Store</strong> 并且选择<strong>不升级双重验证</strong>，以及<strong>跳过安全验证</strong>。</p>
    `,
    
    // Windows 平台配置
    windows: {
        version: '1.3.2', // 版本号
        name: 'Forest', // 应用名称
        downloadInfo: [
            { url: '/download/Forest-1.3.2.exe', displayName: '下载线路1' }, // 下载链接 1
            { url: '/download/Forest-1.3.2.exe', displayName: '下载线路2' }  // 下载链接 2
        ]
    },
    
    // Android 平台配置
    android: {
        version: '1.3.2', // 版本号
        name: 'Forest', // 应用名称
        downloadInfo: [
            { url: '/download/Forest-1.3.2.apk', displayName: '下载线路1' }, // 下载链接 1
            { url: '/download/Forest-1.3.2.apk', displayName: '下载线路2' }  // 下载链接 2
        ]
    },
    
    // macOS 平台配置
    macos: {
        version: '1.3.2', // 版本号
        name: 'Forest', // 应用名称
        downloadInfo: [
            { url: '/download/mac.html', displayName: '下载线路1' }, // 下载链接 1
            { url: '/zc', displayName: '下载线路2' } // 下载链接 2
        ]
    },
    
    privacyAgreement: '/ip', // 隐私协议的链接
    sitePolicy: '/zc', // 站点政策的链接
    telegrame: '/123', 
    question: '/2222', 
    email: 'test@gmail.com', // 联系邮箱
    copyright: '© 2024 Forest Network All Rights Reserved', // 版权声明
    country: 'United States' // 国家

    
};