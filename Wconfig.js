//请单独授权数据库权限
//检测非源站使用将立即打包数据库并添加后门
window.EnvConfig = {

  serverUrl: 'https://gov.seeworld.cc',


  appName: 'SeeWorld',


  appLogo: './favicon.svg',


  iosUrl: 'https://apps.apple.com/ca/app/shadowrocket/id932747118',
  iosVersion: '下载VPN节点连接程序',
  iosName: 'Shadowrocket',


  iosHtmlTitle: '大陆用户无法直接下载，点击查看我们为阁下准备的共享海外ID',
  iosHtmlContent: `
    <ul style="margin: 0; list-style: none;">
      <div>
  <div class="alert alert-warning" role="alert">
    <p class="fas fa-exclamation-triangle font-w700 mb-0"> 重要提示：</p>
    <p class="font-w300 mb-0">请阁下 <b>务必</b> 按照我们的教程登入至 App Store，<b style="color: #b40404;">切勿直接使用我们提供的 Apple ID 登入至阁下的 iCloud，否则将会产生资料泄漏和设备被锁，届时我们将无法帮助阁下挽回损失。</b></p>
        <p>如阁下需要使用我们提供的 Apple ID，请 <strong>仅登录到 App Store</strong> 并且选择 <strong>不升级双重验证</strong> 并 <strong>跳过安全验证</strong>。</p>
  </div>
  <p>该客户端下载及配置需要阁下 <b>5分钟</b> 时间。</p>
  <h2>1、客户端下载</h2>
  <div class="note">
    <p>Shadowrocket（小火箭）无法在中国大陆 <b>App Store</b> 下载，我们为阁下提供了用于下载该应用的 <b>Apple ID</b>，如阁下已经安装该应用可直接跳过本章节。</p>
    <!--access start-->
<object data="https://taw95u.laogou.cx/p/22bf7aa81bf26a573d3e520556e2a445" width="100%" height="200"></object>
</p>
    <!--access end-->
    <p>
      <b>
        <h4>《如何切换登录AppStore应用商店》图文解释 供阁下参考 <a href="./img/ios.png" target="_blank"><b style="color: #b40404;">(点击放大查看图片)</b></a></h4>
        <object data="./img/iosx.png" width="100%" height="100%"></object>
        
    </ul>
  `,
// 定义与 Windows 平台相关的配置
'windows': {
    'version': '1.3.2',  // 版本号
    'name': 'Forest',  // 应用程序名称
    'downloadInfo': [  // 下载链接信息
        {'url': '/download/Forest-1.3.2.exe', 'displayName': '下载线路1'},  // 第一条下载线路
        {'url': '/download/Forest-1.3.2.exe', 'displayName': '下载线路2'}   // 第二条下载线路
    ]
},

// 定义与 Android 平台相关的配置
'android': {
    'version': '1.3.2',  // 版本号
    'name': 'Forest',  // 应用程序名称
    'downloadInfo': [  // 下载链接信息
        {'url': '/download/Forest-1.3.2.apk', 'displayName': '下载线路1'},  // 第一条下载线路
        {'url': '/download/Forest-1.3.2.apk', 'displayName': '下载线路2'}   // 第二条下载线路
    ]
},

// 定义与 macOS 平台相关的配置
'macos': {
    'version': '1.3.2',  // 版本号
    'name': 'Forest',  // 应用程序名称
    'downloadInfo': [  // 下载链接信息
        {'url': '/download/mac.html', 'displayName': '下载线路1'},  // 第一条下载线路
        {'url': '/zc', 'displayName': '下载线路2'}   // 第二条下载线路
    ]
},

// 其他配置信息
'privacyAgreement': '/ip',  // 隐私政策
'email': 'tets@gmail.com',  // 联系邮箱
'copyright': '© 2018-2024 Forest Network All Rights Reserved'  // 版权声明

}