if(!self.define){let e,a={};const c=(c,b)=>(c=new URL(c+".js",b).href,a[c]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=a,document.head.appendChild(e)}else e=c,importScripts(c),a()})).then((()=>{let e=a[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(b,i)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let r={};const d=e=>c(e,s),f={module:{uri:s},exports:r,require:d};a[s]=Promise.all(b.map((e=>f[e]||d(e)))).then((e=>(i(...e),r)))}}define(["./workbox-7d6a3f4d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_pgbackup/404_1656665082.html",revision:"12547a8661a3b9854b18a85849055321"},{url:"_pgbackup/404_1656665094.html",revision:"12547a8661a3b9854b18a85849055321"},{url:"_pgbackup/404_1656665106.html",revision:"77f26b2b2eccccd5d6bcb5cd9b157615"},{url:"_pgbackup/404_1656665116.html",revision:"461a0c9afe9aa1b06724a1825c454b8b"},{url:"_pgbackup/404_1656665150.html",revision:"461a0c9afe9aa1b06724a1825c454b8b"},{url:"_pgbackup/404_1656665170.html",revision:"461a0c9afe9aa1b06724a1825c454b8b"},{url:"_pgbackup/404_1656665752.html",revision:"461a0c9afe9aa1b06724a1825c454b8b"},{url:"_pgbackup/404_1656665767.html",revision:"b2a3f8ad618621d82689e7d7deb44799"},{url:"_pgbackup/404_1656666043.html",revision:"b2a3f8ad618621d82689e7d7deb44799"},{url:"_pgbackup/404_1656666533.html",revision:"7bef884dc30544d755689e3f9a1fda71"},{url:"_pgbackup/404_1656666546.html",revision:"b19fe50a5e5dde21f98f321a4be75abc"},{url:"_pgbackup/404_1656666567.html",revision:"72a119c81c0026a8f563084574ed5826"},{url:"_pgbackup/404_1656666569.html",revision:"1908f3d52c4ff2ceb40dd982cacbe94b"},{url:"_pgbackup/404_1656666624.html",revision:"e8a50e92300587c4fdf0adf5f16e29f7"},{url:"_pgbackup/404_1656666700.html",revision:"1cb7c185e3188e443d196e1c51314e30"},{url:"_pgbackup/404_1656666760.html",revision:"1cb7c185e3188e443d196e1c51314e30"},{url:"_pgbackup/404_1656667234.html",revision:"1cb7c185e3188e443d196e1c51314e30"},{url:"_pgbackup/404_1656667509.html",revision:"0e5812f90b366ee2f79822f89c3bfcc3"},{url:"_pgbackup/404_1656679219.html",revision:"ab6c947f8b30393f7d5ff441b3415e0f"},{url:"_pgbackup/404_1656679315.html",revision:"d3bc2686f7bae51dbba6e9ce3d15de8c"},{url:"_pgbackup/about_1656522764.html",revision:"93998c91a5db832529acc01563e84f4f"},{url:"_pgbackup/about_1656522767.html",revision:"7c811b3aff7355527b51eb641abafea4"},{url:"_pgbackup/about_1656522842.html",revision:"110355ff1030e3acbb31ea5bbeda7761"},{url:"_pgbackup/about_1656522892.html",revision:"103c6aa72e3bd99f8e4e1954b10b1c15"},{url:"_pgbackup/about_1656523000.html",revision:"c0dd66c3b667ef76a77b67a6e0c6a8f7"},{url:"_pgbackup/about_1656523564.html",revision:"e5507dc1017e5b7510cc75c3c2e68341"},{url:"_pgbackup/about_1656523769.html",revision:"c3b86c305d983ec31c9565c5cb0c6c94"},{url:"_pgbackup/about_1656523814.html",revision:"509a2b6f28d0a8d5b7d4240fa19387bd"},{url:"_pgbackup/about_1656523867.html",revision:"b5a16f18a7af00aa054fe141befcaa58"},{url:"_pgbackup/about_1656664621.html",revision:"cac93263429a242fe31dc50e28207309"},{url:"_pgbackup/about_1656682638.html",revision:"ae8931fea138d23bd8afb1495ab253b9"},{url:"_pgbackup/about_1656683017.html",revision:"2c9f73a608e24c4616bbd41f2d29b48e"},{url:"_pgbackup/about_1656683024.html",revision:"61b4e1dc788b0eb35f9708a64a698803"},{url:"_pgbackup/about_1656683033.html",revision:"5a46ebc8f2dff72d434d0625370c547d"},{url:"_pgbackup/about_1656683054.html",revision:"a761a5798b45d7b65b90d6d596dfbbd8"},{url:"_pgbackup/about_1656683064.html",revision:"a761a5798b45d7b65b90d6d596dfbbd8"},{url:"_pgbackup/about_1656683082.html",revision:"5b4d5825792b9f4984262553d8cfcb36"},{url:"_pgbackup/about_1656683085.html",revision:"5b4d5825792b9f4984262553d8cfcb36"},{url:"_pgbackup/about_1656683098.html",revision:"5b4d5825792b9f4984262553d8cfcb36"},{url:"_pgbackup/about_1656683154.html",revision:"ad7d9cd2990373389b01768723012fb0"},{url:"_pgbackup/contact_1656413595.html",revision:"e1f36f95e5b17bec5f82ecb78ae9c621"},{url:"_pgbackup/contact_1656413676.html",revision:"63a8d2b9384a6b6dc352c854dcbc341c"},{url:"_pgbackup/contact_1656423039.html",revision:"2d44a35b19ff39aa9dea3c395a9f07b3"},{url:"_pgbackup/contact_1656423278.html",revision:"f7cd9966631755749eb331f279cd8378"},{url:"_pgbackup/contact_1656423711.html",revision:"40081bd638451e73a684e5615a3add11"},{url:"_pgbackup/contact_1656423910.html",revision:"5d4a98da64525a40227aca4b9905bb44"},{url:"_pgbackup/contact_1656427952.html",revision:"34eb903fd1270d368b7bbbd9f24a69f0"},{url:"_pgbackup/contact_1656522669.html",revision:"84706d76ce5e8650b9da1db76517b2f6"},{url:"_pgbackup/contact_1656522710.html",revision:"9019399789c06a01392cd13a5a3f756d"},{url:"_pgbackup/contact_1656522764.html",revision:"3e4f990a1a84627d4ca7be324d23d79c"},{url:"_pgbackup/contact_1656522767.html",revision:"0292263a531198e0338292d986b1767f"},{url:"_pgbackup/contact_1656522842.html",revision:"326f693de6df6bf8de7977f192806723"},{url:"_pgbackup/contact_1656522892.html",revision:"7948800c02c785d344cdd2965c75840e"},{url:"_pgbackup/contact_1656523000.html",revision:"b7e5448b6c45392c8ae20a11354e312a"},{url:"_pgbackup/contact_1656523564.html",revision:"a4d7b178f1ff72123cd1c8da9f8bd2fd"},{url:"_pgbackup/contact_1656523769.html",revision:"75addffad3b5854ac716400f462bb36c"},{url:"_pgbackup/contact_1656523814.html",revision:"39896d7d0123a8f1ea1b97aa7332802d"},{url:"_pgbackup/contact_1656523867.html",revision:"108dffa0f92aeb226802229db005590f"},{url:"_pgbackup/contact_1656664621.html",revision:"4bef2f23ac426babfa8b0fc27cd67185"},{url:"_pgbackup/contact_1656682638.html",revision:"6b674cdd4d628d0fd6df6b3736186b94"},{url:"_pgbackup/css/style_1656665150.css",revision:"fc85a43cfa8ad7b5cfe75ec94f14722d"},{url:"_pgbackup/css/style_1656665170.css",revision:"66666908315d7d36862e498decb68913"},{url:"_pgbackup/css/style_1656665767.css",revision:"143d3c010a25380f0f142c73635bd65d"},{url:"_pgbackup/css/style_1656665816.css",revision:"bd5e2443bfadbf6d86690e79f979780e"},{url:"_pgbackup/css/style_1656665822.css",revision:"b575542bb37043c1bebe4162af1f7c8c"},{url:"_pgbackup/css/style_1656666524.css",revision:"b575542bb37043c1bebe4162af1f7c8c"},{url:"_pgbackup/css/style_1656666625.css",revision:"b527f67b5320ea3068dafe0506ac1366"},{url:"_pgbackup/css/style_1656666760.css",revision:"b575542bb37043c1bebe4162af1f7c8c"},{url:"_pgbackup/css/style_1656682186.css",revision:"6c599352bf957a71c142246a7dfb8547"},{url:"_pgbackup/css/style_1656682199.css",revision:"c3ace548c36a4faa3092efa8aabe2947"},{url:"_pgbackup/css/style_1656682328.css",revision:"05a4d8fcb8316f40c6c8cae5de7b6bce"},{url:"_pgbackup/css/style_1656682460.css",revision:"056e8addf5b90043d08056e726744e18"},{url:"_pgbackup/css/style_1656682489.css",revision:"b185802a3b7f5be7cd9bfcba9e9988e1"},{url:"_pgbackup/css/style_1656683054.css",revision:"16a4f769b412788e14cd9131b5dc843e"},{url:"_pgbackup/css/style_1656683082.css",revision:"99fdc330c9a20c069618213d7bb8e4db"},{url:"_pgbackup/css/style_1656683085.css",revision:"f96ba77303c5e5d4071cb5a34707970c"},{url:"_pgbackup/css/style_1656683154.css",revision:"63f3a3dd4bd1c7ba81c6e6cfe7fdc804"},{url:"_pgbackup/css/style_1656683168.css",revision:"05d4babc1055f05932f29cb676b0f397"},{url:"_pgbackup/css/style_1656683210.css",revision:"343abe7483d92e4c64e6fb5076c30a5e"},{url:"_pgbackup/css/style_1656683232.css",revision:"522e79ab58a92e62ac8442247306cc0f"},{url:"_pgbackup/dist/index_1656412918.html",revision:"650d40b296fdce6f85046909b688f9ad"},{url:"_pgbackup/dist/index_1656413676.html",revision:"67547ec9ff03608fa2b768aedcd6abea"},{url:"_pgbackup/dist/index_1656423039.html",revision:"61daa75812afe127683e1ca13376d053"},{url:"_pgbackup/dist/index_1656423278.html",revision:"7c84f79757492ded0b4eebcfcae9b78d"},{url:"_pgbackup/dist/index_1656423711.html",revision:"cab6a9a53b8ff9740cb2ea9e720c7ca0"},{url:"_pgbackup/dist/index_1656423910.html",revision:"c3f3d60b0dee49cbd7fadc25cb7e62d4"},{url:"_pgbackup/dist/index_1656427952.html",revision:"92b404f7691f4c971ce4120acd368837"},{url:"_pgbackup/dist/index_1656522669.html",revision:"1a7817a559c41d03769c2f33d4ac6d36"},{url:"_pgbackup/dist/index_1656522710.html",revision:"f5bbd0d44fa189e5618d133eed151712"},{url:"_pgbackup/dist/index_1656522764.html",revision:"e6a1874619b2ab29a2798c3b298597a6"},{url:"_pgbackup/dist/index_1656522767.html",revision:"4c7d0ca1037a39239c5bf5594e21e09b"},{url:"_pgbackup/dist/index_1656522843.html",revision:"e40bcfeb380b71babf1acdbaeb8681f9"},{url:"_pgbackup/dist/index_1656522892.html",revision:"cb51721df2897e16b90e8cc51a885fb2"},{url:"_pgbackup/dist/index_1656523000.html",revision:"9a2823761201439947994ed713d30cac"},{url:"_pgbackup/dist/index_1656523564.html",revision:"541ccc1bf527fbc1698c362a243ef963"},{url:"_pgbackup/dist/index_1656523769.html",revision:"1e173646374a10ca423380fea4715507"},{url:"_pgbackup/dist/index_1656523814.html",revision:"803cc56ce1659284639eadd522a6054a"},{url:"_pgbackup/dist/index_1656523867.html",revision:"025fe25c0cb0ebdc340d5f1b4ab981c1"},{url:"_pgbackup/dist/index_1656664621.html",revision:"1a14124f9194172cb8bb2eee254be53e"},{url:"_pgbackup/dist/index_1656682638.html",revision:"61ec59f97f0dbaafb8f0f384f0cd12bc"},{url:"_pgbackup/end-credits_1656681447.html",revision:"53eab888ea177813f880ffd8842ed8d7"},{url:"_pgbackup/end-credits_1656681461.html",revision:"b4dc4fccd0e66924f6a77ca92b92bd3c"},{url:"_pgbackup/end-credits_1656681470.html",revision:"e3744d52f9e78c0d56629d0451518933"},{url:"_pgbackup/end-credits_1656681769.html",revision:"48b9369a26efdcfd39fac31ea4e57890"},{url:"_pgbackup/end-credits_1656681783.html",revision:"58e95e6c1da49f4168b46e8327c533ba"},{url:"_pgbackup/end-credits_1656682023.html",revision:"08597b8f830cabb676896a546d55d542"},{url:"_pgbackup/end-credits_1656682186.html",revision:"5a7d4216e4f6e68b0123bce6263b0922"},{url:"_pgbackup/end-credits_1656682199.html",revision:"b813f574a1cc7c5ad9989c5d4ab8247c"},{url:"_pgbackup/end-credits_1656682223.html",revision:"b813f574a1cc7c5ad9989c5d4ab8247c"},{url:"_pgbackup/end-credits_1656682250.html",revision:"b813f574a1cc7c5ad9989c5d4ab8247c"},{url:"_pgbackup/end-credits_1656682283.html",revision:"4d6a6586fc46630588e8d5234662aa25"},{url:"_pgbackup/end-credits_1656682361.html",revision:"b813f574a1cc7c5ad9989c5d4ab8247c"},{url:"_pgbackup/end-credits_1656682460.html",revision:"46e8fa147c0dd309e6758615efd6a401"},{url:"_pgbackup/end-credits_1656682489.html",revision:"46e8fa147c0dd309e6758615efd6a401"},{url:"_pgbackup/end-credits_1656682638.html",revision:"46e8fa147c0dd309e6758615efd6a401"},{url:"_pgbackup/end-credits_1656946732.html",revision:"1d9bf3b5770e80897ec5b24c4c9aa9fa"},{url:"_pgbackup/end-credits_1656946848.html",revision:"aa6f8ea3eccfce7374e84af7b35acf78"},{url:"_pgbackup/end-credits_1656946909.html",revision:"fb9bf09d00e127984f63814481722687"},{url:"_pgbackup/end-credits_1656946958.html",revision:"ebb25223795a39f0249235bb39252141"},{url:"_pgbackup/end-credits_1656947223.html",revision:"b00654166e56964fd5cd647cf6099a6d"},{url:"_pgbackup/index_1656493350.html",revision:"8b1ae8a4a250d5c1975d26df544503f1"},{url:"_pgbackup/index_1656522602.html",revision:"8b1ae8a4a250d5c1975d26df544503f1"},{url:"_pgbackup/index_1656522669.html",revision:"25f499c9a8d2320b91969ebccb0475a5"},{url:"_pgbackup/index_1656522710.html",revision:"3cb46476cf346036d4c08a74eb0c3960"},{url:"_pgbackup/index_1656522764.html",revision:"d9490728beb4a6463bdd8a0ba5255948"},{url:"_pgbackup/index_1656522767.html",revision:"757932bee9102f491a2a7395d2d99fbe"},{url:"_pgbackup/index_1656522842.html",revision:"4f79a7d0343dff70855343c4dd0414da"},{url:"_pgbackup/index_1656522892.html",revision:"cacd4963adb1e61cde58caa8d395e0de"},{url:"_pgbackup/index_1656523000.html",revision:"7f66b3b59484ec5275482aaa01250790"},{url:"_pgbackup/index_1656523323.html",revision:"38e4044195690e4a63bef0433aa05238"},{url:"_pgbackup/index_1656523435.html",revision:"e3188c3ef5ee7d844cf964c8c449fd83"},{url:"_pgbackup/index_1656523564.html",revision:"e3188c3ef5ee7d844cf964c8c449fd83"},{url:"_pgbackup/index_1656523768.html",revision:"a92b7e3802426cf83e39f189a8badbf1"},{url:"_pgbackup/index_1656523814.html",revision:"a1427d5369acc188afa4c5af3847b637"},{url:"_pgbackup/index_1656523867.html",revision:"aca184922ff37d7c75d289ea8ffcc03e"},{url:"_pgbackup/index_1656523935.html",revision:"9a7cc8fdc3440142dd303e93d4183b05"},{url:"_pgbackup/index_1656523952.html",revision:"7485e8d92aa1d7d67f560ac5bae737d4"},{url:"_pgbackup/index_1656664621.html",revision:"923a627b1c4f288dea9770914db353ae"},{url:"_pgbackup/index_1656666524.html",revision:"14c29750d289d2e2f3996db5e6e95924"},{url:"_pgbackup/index_1656682638.html",revision:"39c1fab9428a73bf32bffe6f7ed34f1a"},{url:"_pgbackup/js/main_1656666853.js",revision:"496977ec62fa2036763d8f178c0b2b22"},{url:"_pgbackup/js/main_1656666870.js",revision:"766cdfbd99ba450dd080f5e9fccf556f"},{url:"_pgbackup/js/main_1656666901.js",revision:"8afa230caead59beacc0eceaaba628af"},{url:"_pgbackup/js/main_1656666948.js",revision:"8afa230caead59beacc0eceaaba628af"},{url:"_pgbackup/js/main_1656666973.js",revision:"20dbf57e703e53f5ef5cab05ed8677fb"},{url:"_pgbackup/js/main_1656666987.js",revision:"bb3ec9194e210a909c92fa996c129966"},{url:"_pgbackup/js/main_1656667007.js",revision:"f489386cf64b3efb497381279a5f4ebf"},{url:"_pgbackup/js/main_1656667013.js",revision:"0dd92222283d2afc2fe009df243a78ce"},{url:"_pgbackup/js/main_1656667075.js",revision:"0dd92222283d2afc2fe009df243a78ce"},{url:"_pgbackup/js/main_1656667114.js",revision:"67944c3b5eac11768cd9eaf675a49aa9"},{url:"_pgbackup/js/main_1656667133.js",revision:"22da52ef8b71ad17b8e0d03f0f1e0f9f"},{url:"_pgbackup/js/main_1656667201.js",revision:"ea01842f51a81155bb08a53af8cad0de"},{url:"_pgbackup/js/main_1656667234.js",revision:"8927c89ef526b9fa0e1055b97e8022ff"},{url:"_pgbackup/js/main_1656667273.js",revision:"8927c89ef526b9fa0e1055b97e8022ff"},{url:"_pgbackup/js/main_1656667351.js",revision:"8927c89ef526b9fa0e1055b97e8022ff"},{url:"_pgbackup/js/main_1656667448.js",revision:"4fd1ddaf5f3c5371dff90910fa0c0755"},{url:"_pgbackup/js/main_1656667455.js",revision:"4fd1ddaf5f3c5371dff90910fa0c0755"},{url:"_pgbackup/js/main_1656682899.js",revision:"4fd1ddaf5f3c5371dff90910fa0c0755"},{url:"_pgbackup/js/main_1656682925.js",revision:"4fd1ddaf5f3c5371dff90910fa0c0755"},{url:"_pgbackup/js/main_1656682954.js",revision:"a0e01207e3f935f9fc058e272d67983d"},{url:"_pgbackup/js/three_1653586285.js",revision:"161cc6e43a38f317676f9e97c8a73e33"},{url:"_pgbackup/js/three_1653916108.js",revision:"598231cb620bad75a40f7db19b05ffa6"},{url:"_pgbackup/js/three_1653916491.js",revision:"fc7591cf4628a41a1e0e389e18615aca"},{url:"_pgbackup/js/three_1654674561.js",revision:"a326ad9e3736d562d5268a3c4c128ea7"},{url:"_pgbackup/masterpage_1656423706.html",revision:"13a5106141f7bd9d5ae5914a93324552"},{url:"_pgbackup/masterpage_1656423903.html",revision:"9d6740fe9d45daef8fcb0cac19566560"},{url:"_pgbackup/masterpage_1656424229.html",revision:"a4f7482b6afd6e199f5bc002c87af36d"},{url:"_pgbackup/masterpage_1656424252.html",revision:"a4f7482b6afd6e199f5bc002c87af36d"},{url:"_pgbackup/masterpage_1656424360.html",revision:"a4f7482b6afd6e199f5bc002c87af36d"},{url:"_pgbackup/masterpage_1656424442.html",revision:"a4f7482b6afd6e199f5bc002c87af36d"},{url:"_pgbackup/masterpage_1656424551.html",revision:"a4f7482b6afd6e199f5bc002c87af36d"},{url:"_pgbackup/masterpage_1656424569.html",revision:"a4f7482b6afd6e199f5bc002c87af36d"},{url:"_pgbackup/masterpage_1656424600.html",revision:"a4f7482b6afd6e199f5bc002c87af36d"},{url:"_pgbackup/masterpage_1656424609.html",revision:"a4f7482b6afd6e199f5bc002c87af36d"},{url:"_pgbackup/masterpage_1656424614.html",revision:"a4f7482b6afd6e199f5bc002c87af36d"},{url:"_pgbackup/masterpage_1656424630.html",revision:"a4f7482b6afd6e199f5bc002c87af36d"},{url:"_pgbackup/masterpage_1656427754.html",revision:"a4f7482b6afd6e199f5bc002c87af36d"},{url:"_pgbackup/masterpage_1656427779.html",revision:"47a3abf41a6a0b8925962f771d66efa1"},{url:"_pgbackup/masterpage_1656522616.html",revision:"00733c0a179858ecc858ae3e43329a66"},{url:"_pgbackup/masterpage_1656522629.html",revision:"b83fb8d41bb371808e8e1867a5d83282"},{url:"_pgbackup/masterpage_1656522706.html",revision:"b83fb8d41bb371808e8e1867a5d83282"},{url:"_pgbackup/masterpage_1656522764.html",revision:"8b033ae29d9b2ad1577769b61b1e0d8c"},{url:"_pgbackup/masterpage_1656523434.html",revision:"31113d8585b812562d9f413bbe52bf7c"},{url:"_pgbackup/masterpage_1656523562.html",revision:"31113d8585b812562d9f413bbe52bf7c"},{url:"_pgbackup/masterpage-detail_1656325869.html",revision:"72695b67cbb10d0a5f36c88756404b31"},{url:"_pgbackup/masterpage-detail_1656325944.html",revision:"4ec16c61b186c586830c9c55b7eb0bd5"},{url:"_pgbackup/masterpage-detail_1656326016.html",revision:"307867afcebf6a2dea7071cc2102071e"},{url:"_pgbackup/masterpage-detail_1656326032.html",revision:"96ee709158f5c3b2f28f4ac72c808ea6"},{url:"_pgbackup/masterpage-detail_1656326036.html",revision:"8c5bde1c70ba941872d806ffc83d1e57"},{url:"_pgbackup/masterpage-detail_1656326139.html",revision:"8c5bde1c70ba941872d806ffc83d1e57"},{url:"_pgbackup/masterpage-detail_1656326873.html",revision:"c75677f86892777c20d2e85c05b11b87"},{url:"_pgbackup/masterpage-detail_1656336889.html",revision:"c75677f86892777c20d2e85c05b11b87"},{url:"_pgbackup/masterpage-detail_1656336900.html",revision:"7c2afc593a9a4ea681ad2b0ae6bc68e0"},{url:"_pgbackup/masterpage-detail_1656336917.html",revision:"7c2afc593a9a4ea681ad2b0ae6bc68e0"},{url:"_pgbackup/masterpage-detail_1656412644.html",revision:"7c2afc593a9a4ea681ad2b0ae6bc68e0"},{url:"_pgbackup/masterpage-detail_1656412674.html",revision:"93a26f3eb776c599d0d7c85283c5922c"},{url:"_pgbackup/masterpage-detail_1656412697.html",revision:"815b1a41e06f1e24331b933e91b0c588"},{url:"_pgbackup/masterpage-detail_1656413177.html",revision:"7c2afc593a9a4ea681ad2b0ae6bc68e0"},{url:"_pgbackup/masterpage-detail_1656522889.html",revision:"09a05b229fd7f897c763faa2ba3b6c6f"},{url:"_pgbackup/masterpage-detail_1656522997.html",revision:"2f7e077b634f4e3efb14194390b7b265"},{url:"_pgbackup/masterpage-detail_1656523765.html",revision:"2f7e077b634f4e3efb14194390b7b265"},{url:"_pgbackup/masterpage-detail_1656523810.html",revision:"6159c9b5544899f92fc6b146825dafab"},{url:"_pgbackup/masterpage-detail_1656523863.html",revision:"740aae10027901c7d6e2cec06427251e"},{url:"_pgbackup/masterpage-detail_1656682634.html",revision:"a6af2ea56ff0d845394eef13c42ad68c"},{url:"_pgbackup/pinegrow_1656682460.json",revision:"ee31214d6985ce4d362726cc3a210193"},{url:"_pgbackup/pinegrow_1656682489.json",revision:"e21c7708070078dfd3c4ea4063a88522"},{url:"_pgbackup/pinegrow_1656682634.json",revision:"a87cd0e7aa92266db01ba0c8c362da4b"},{url:"_pgbackup/pinegrow_1656682638.json",revision:"a87cd0e7aa92266db01ba0c8c362da4b"},{url:"_pgbackup/pinegrow_1656683017.json",revision:"088cdc0347fca0b21ea76494b52acaa9"},{url:"_pgbackup/pinegrow_1656683024.json",revision:"6c05fb78ced07f901459716b55601846"},{url:"_pgbackup/pinegrow_1656683033.json",revision:"6c05fb78ced07f901459716b55601846"},{url:"_pgbackup/pinegrow_1656683041.json",revision:"6c05fb78ced07f901459716b55601846"},{url:"_pgbackup/pinegrow_1656683054.json",revision:"6c05fb78ced07f901459716b55601846"},{url:"_pgbackup/pinegrow_1656683064.json",revision:"6c05fb78ced07f901459716b55601846"},{url:"_pgbackup/pinegrow_1656683082.json",revision:"6c05fb78ced07f901459716b55601846"},{url:"_pgbackup/pinegrow_1656683085.json",revision:"6c05fb78ced07f901459716b55601846"},{url:"_pgbackup/pinegrow_1656683098.json",revision:"6c05fb78ced07f901459716b55601846"},{url:"_pgbackup/pinegrow_1656683154.json",revision:"6c05fb78ced07f901459716b55601846"},{url:"_pgbackup/pinegrow_1656946732.json",revision:"1083888f3bf50a7d163e38c933332795"},{url:"_pgbackup/pinegrow_1656946848.json",revision:"1b3b90b25b9d2c079b6c8342d1702134"},{url:"_pgbackup/pinegrow_1656946849.json",revision:"1b3b90b25b9d2c079b6c8342d1702134"},{url:"_pgbackup/pinegrow_1656946909.json",revision:"1b3b90b25b9d2c079b6c8342d1702134"},{url:"_pgbackup/pinegrow_1656946958.json",revision:"1b3b90b25b9d2c079b6c8342d1702134"},{url:"_pgbackup/pinegrow_1656947223.json",revision:"1b3b90b25b9d2c079b6c8342d1702134"},{url:"_pgbackup/privacy-policy_1656412918.html",revision:"911b2d520bfb45563ff089112b53b51d"},{url:"_pgbackup/privacy-policy_1656413676.html",revision:"592baba665747dd45cfe2b4050539118"},{url:"_pgbackup/privacy-policy_1656423039.html",revision:"fd18a2a5f0ce11e29dd4ba28647a5f76"},{url:"_pgbackup/privacy-policy_1656423278.html",revision:"89499e3a869aee4c9f39b902ffd5f97f"},{url:"_pgbackup/privacy-policy_1656423711.html",revision:"82ccdf8edae76582e19369bffda4cfd7"},{url:"_pgbackup/privacy-policy_1656423910.html",revision:"671978481da97eafd8a48cdee39140db"},{url:"_pgbackup/privacy-policy_1656427952.html",revision:"b0c9110df4c7eec79a4c262152674688"},{url:"_pgbackup/privacy-policy_1656522669.html",revision:"47499fa7825b457e3279e9353033a7c0"},{url:"_pgbackup/privacy-policy_1656522710.html",revision:"03ea09cb5ee9234d7e431a063e1e6d79"},{url:"_pgbackup/privacy-policy_1656522764.html",revision:"ee025e0915a41e79a194b8e8179ac89c"},{url:"_pgbackup/privacy-policy_1656522767.html",revision:"705fb8b9d5813e630cef42ec728f476d"},{url:"_pgbackup/privacy-policy_1656522842.html",revision:"e0151f68176a1882e499a413d233faee"},{url:"_pgbackup/privacy-policy_1656522892.html",revision:"02a641413686172228dc99cb64946d50"},{url:"_pgbackup/privacy-policy_1656523000.html",revision:"e57ccec5ea6ba549cf93eef87c312346"},{url:"_pgbackup/privacy-policy_1656523564.html",revision:"173fa3215cd14ada38b79e736b1da79b"},{url:"_pgbackup/privacy-policy_1656523769.html",revision:"908d08985291e3cb3ba061661753aaa4"},{url:"_pgbackup/privacy-policy_1656523814.html",revision:"e5d33a57d9cedca302156daaf9888fff"},{url:"_pgbackup/privacy-policy_1656523867.html",revision:"659539d29118974e1ab6ea91f3a29bc2"},{url:"_pgbackup/privacy-policy_1656664621.html",revision:"e6f1831e0e3c90aa1a0a84943387ffc5"},{url:"_pgbackup/privacy-policy_1656682638.html",revision:"dcd32623037146b2eb62c2156bfaff31"},{url:"_pgbackup/process_1656423278.html",revision:"c8f129a4626eb7c507fda3017fcb0633"},{url:"_pgbackup/process_1656423711.html",revision:"a850f751e72be187bbd689d1f7afe832"},{url:"_pgbackup/process_1656423910.html",revision:"791898f3425db1ad7a919909363a2722"},{url:"_pgbackup/process_1656427952.html",revision:"1a8ed0b043b0ff8e01aa9c26113a7603"},{url:"_pgbackup/process_1656522669.html",revision:"56685220487e3414a012f91611454283"},{url:"_pgbackup/process_1656522710.html",revision:"3f599c202af85b2932a43154d21c21aa"},{url:"_pgbackup/process_1656522764.html",revision:"4d2bd0d714bb87c3e40f018b3b938412"},{url:"_pgbackup/process_1656522767.html",revision:"3b38fac99748a9098ba90e45454142db"},{url:"_pgbackup/process_1656522843.html",revision:"093674aac4d805f9cb22145e841b50c2"},{url:"_pgbackup/process_1656522892.html",revision:"b74550e1a99fc73086552dbc6ea4e4b8"},{url:"_pgbackup/process_1656523000.html",revision:"206f91fe237f5cd51a1e219caec12890"},{url:"_pgbackup/process_1656523061.html",revision:"1ca6383f97c96636bcc58d615aa33b0c"},{url:"_pgbackup/process_1656523084.html",revision:"85af88ff673ca83ca8dbb2c7f55ba0fc"},{url:"_pgbackup/process_1656523138.html",revision:"85af88ff673ca83ca8dbb2c7f55ba0fc"},{url:"_pgbackup/process_1656523564.html",revision:"85af88ff673ca83ca8dbb2c7f55ba0fc"},{url:"_pgbackup/process_1656523768.html",revision:"363097af94f1dbbafdd0c82915344fd8"},{url:"_pgbackup/process_1656523814.html",revision:"2cc23f07f4271a8f087a1ea96db8d8ac"},{url:"_pgbackup/process_1656523867.html",revision:"b66459a2f07764a5a92db96e329fd64a"},{url:"_pgbackup/process_1656664621.html",revision:"9fdd99419f932b1ce9ff5b1b620169a9"},{url:"_pgbackup/process_1656682638.html",revision:"01360e85cb1738d50f3476c13c8d73db"},{url:"_pgbackup/samuel-gregory_1655475638.html",revision:"740923f58a7c305155c30bdd2d3e3576"},{url:"_pgbackup/samuel-gregory_1655475645.html",revision:"c059fb179dd57c251bc48466fd59cad3"},{url:"_pgbackup/samuel-gregory_1655475693.html",revision:"beb025e4fc656f8148df4879d88579a2"},{url:"_pgbackup/samuel-gregory_1655475700.html",revision:"771af43294e11be717c2f661b45639cf"},{url:"_pgbackup/samuel-gregory_1655475713.html",revision:"9e34af75adb4aa7c1591b0b9cd5dc9a1"},{url:"_pgbackup/samuel-gregory_1655475766.html",revision:"c3cf127b4b4cafc761691fe9e89763ec"},{url:"_pgbackup/samuel-gregory_1655475774.html",revision:"502816c42d27cb08fedd9f91c59382a4"},{url:"_pgbackup/samuel-gregory_1655475787.html",revision:"cd44bb4faacf3bb3046ec738235bf902"},{url:"_pgbackup/samuel-gregory_1655475798.html",revision:"1a03343850521e92f23ed2f4f068291f"},{url:"_pgbackup/samuel-gregory_1655475801.html",revision:"34e8b724f3c94fa7993bb634fedb851f"},{url:"_pgbackup/samuel-gregory_1655475811.html",revision:"5dafbd86cef68bd514539b297096779f"},{url:"_pgbackup/samuel-gregory_1655475827.html",revision:"5041800420ba5df86556178f0e003eb6"},{url:"_pgbackup/samuel-gregory_1655475864.html",revision:"5041800420ba5df86556178f0e003eb6"},{url:"_pgbackup/samuel-gregory_1655475912.html",revision:"5041800420ba5df86556178f0e003eb6"},{url:"_pgbackup/samuel-gregory_1655475935.html",revision:"f360ed7d770549e410799996f8c13a62"},{url:"_pgbackup/samuel-gregory_1655475955.html",revision:"f9db379f6bb11c630cfb012202d9a084"},{url:"_pgbackup/samuel-gregory_1655475963.html",revision:"f9db379f6bb11c630cfb012202d9a084"},{url:"_pgbackup/samuel-gregory_1655476198.html",revision:"f9db379f6bb11c630cfb012202d9a084"},{url:"_pgbackup/samuel-gregory_1655476233.html",revision:"f9db379f6bb11c630cfb012202d9a084"},{url:"_pgbackup/samuel-gregory_1655476263.html",revision:"2d76ba921eeb405eb093f5cfcb789191"},{url:"_pgbackup/styleguide_1656412918.html",revision:"d9b1af2c7e2485833f3e150a5bf679f5"},{url:"_pgbackup/styleguide_1656413676.html",revision:"48248a755b61ff806a2e5feeddbfba7d"},{url:"_pgbackup/styleguide_1656423039.html",revision:"e42eb5c579a05bf03c7323731e7fe489"},{url:"_pgbackup/styleguide_1656423278.html",revision:"3b076d88e1f27a8c9e7a5cb812205975"},{url:"_pgbackup/styleguide_1656423711.html",revision:"e6bcd571e2117c539862a37301bf0366"},{url:"_pgbackup/styleguide_1656423910.html",revision:"a0c15d58de9c879870e1cc6bd4260f7c"},{url:"_pgbackup/styleguide_1656427952.html",revision:"fc6e3ff135dc9ea37aa6586339e3d9e5"},{url:"_pgbackup/styleguide_1656522669.html",revision:"195f8cf945ca27880a2fcc4780cbdbc1"},{url:"_pgbackup/styleguide_1656522710.html",revision:"11e3cfc76ab6cae45157ee8914a2daa0"},{url:"_pgbackup/styleguide_1656522764.html",revision:"ce6a17c66540adc18f72c8845ee4fc2f"},{url:"_pgbackup/styleguide_1656522767.html",revision:"aad33e874e3d38714655329485e76313"},{url:"_pgbackup/styleguide_1656522843.html",revision:"6cf5c4b7ae46fc5579050c54f46496ab"},{url:"_pgbackup/styleguide_1656522892.html",revision:"51d62fc69dcdc78c9127df324599750b"},{url:"_pgbackup/styleguide_1656523000.html",revision:"67a4440a1a2754b44f8043baa5ed4de7"},{url:"_pgbackup/styleguide_1656523564.html",revision:"d3d34cf2b715787a412d7c223bb62e4d"},{url:"_pgbackup/styleguide_1656523769.html",revision:"ef49de23ab2eba89d1dc8a7984767ecb"},{url:"_pgbackup/styleguide_1656523814.html",revision:"dcb088cf6ea9fb7399c45d5e5a1d8065"},{url:"_pgbackup/styleguide_1656523867.html",revision:"eab278ceb0955fa8878c36caa6de5059"},{url:"_pgbackup/styleguide_1656664621.html",revision:"14c99587a2242a07b71e6d524429036f"},{url:"_pgbackup/styleguide_1656682638.html",revision:"fdb252e964e408988d862aaecc486325"},{url:"_pgbackup/terms-and-conditions_1656412918.html",revision:"bd9b264c96a590579bc8420fcef8a3b2"},{url:"_pgbackup/terms-and-conditions_1656413676.html",revision:"6a21303a245e7c3f34763ba36e221585"},{url:"_pgbackup/terms-and-conditions_1656423039.html",revision:"d59224f662c33a0a11ef4d6f6d523825"},{url:"_pgbackup/terms-and-conditions_1656423278.html",revision:"53a0a06393f8583b3618c46ceb464461"},{url:"_pgbackup/terms-and-conditions_1656423711.html",revision:"783147c1cef66aab91ca08367d3b7bc4"},{url:"_pgbackup/terms-and-conditions_1656423910.html",revision:"56e7cb6a1b386eafea1ada352ce95797"},{url:"_pgbackup/terms-and-conditions_1656427952.html",revision:"8fc47d2c87016a595d48bec153343a88"},{url:"_pgbackup/terms-and-conditions_1656522669.html",revision:"fbd801cf44ae92247638c52450b75d8b"},{url:"_pgbackup/terms-and-conditions_1656522710.html",revision:"7cb562aa25d310f18c46f18bc4afb7f1"},{url:"_pgbackup/terms-and-conditions_1656522764.html",revision:"f51fb37b24291c32ca42594804cdb6d0"},{url:"_pgbackup/terms-and-conditions_1656522767.html",revision:"1ea9847292c79489a4e80727074c56f1"},{url:"_pgbackup/terms-and-conditions_1656522843.html",revision:"7ae25694287adcd3bcdc87622ff71542"},{url:"_pgbackup/terms-and-conditions_1656522892.html",revision:"893d3e19ef8e8dacc2183212806830bf"},{url:"_pgbackup/terms-and-conditions_1656523000.html",revision:"094c630a665288e33eb04eeaa4d7c9ae"},{url:"_pgbackup/terms-and-conditions_1656523564.html",revision:"c9c39cc24e0544a6f1e8674b4a010805"},{url:"_pgbackup/terms-and-conditions_1656523769.html",revision:"d297f0ba26d567d0e10ed223fee41558"},{url:"_pgbackup/terms-and-conditions_1656523814.html",revision:"e38a901256167612b3aa2ed58d793527"},{url:"_pgbackup/terms-and-conditions_1656523867.html",revision:"7d788a6ff2c2dcd480bcc888fe00b817"},{url:"_pgbackup/terms-and-conditions_1656664621.html",revision:"2c9df10508cc7ccacb2bd3adc7371f75"},{url:"_pgbackup/terms-and-conditions_1656682638.html",revision:"51c252539383b2fc3b9e5e1f09bc23d0"},{url:"_pginfo/fonts.json",revision:"a099da93712b5f3a0231e7e4f7b96f6e"},{url:"404.html",revision:"d3bc2686f7bae51dbba6e9ce3d15de8c"},{url:"about.html",revision:"ad7d9cd2990373389b01768723012fb0"},{url:"android-chrome-192x192.png",revision:"bdfbc4ad6fc41e07d8fda9d8063910d7"},{url:"android-chrome-256x256.png",revision:"7fdebc5f13be762a237aa56ca3b27d0f"},{url:"apple-touch-icon.png",revision:"2e3944dd85f27d7f061a8601d49e094d"},{url:"assets/audio/about.mp3",revision:"e9554c9c7eda59549a72625a3b85bd29"},{url:"assets/audio/contact.mp3",revision:"0d3ab24a3e3c79fd6d27818dd85fa8df"},{url:"assets/audio/end-credits.mp3",revision:"5300df5b458bc9bce08616d3f2f01d91"},{url:"assets/audio/index.mp3",revision:"a252bfd0b311c94ac153312a466725a6"},{url:"assets/audio/process.mp3",revision:"630ec2f6c1578e1484e559394b5d7f97"},{url:"assets/audio/static.mp3",revision:"0b71d588a086d5dd602f82ac2f14f26a"},{url:"assets/fonts/icomoon.eot",revision:"8d315ab75c215ecfadd7f38d73894ac3"},{url:"assets/fonts/icomoon.svg",revision:"54908060028a4e15de5f4674a40a792f"},{url:"assets/fonts/icomoon.ttf",revision:"dc7795ab884b424b15660d72a9feb5c3"},{url:"assets/fonts/icomoon.woff",revision:"8a2e4a3122d60b4b1040e737972586a9"},{url:"assets/fonts/selection.json",revision:"94370fed891bb5aa788e38974272ed9a"},{url:"assets/images/blur.png",revision:"b060d40c8aded53d60849b45655ccfad"},{url:"assets/images/Chris Profile.jpg",revision:"a7f81f60a537b745ee656e7a0a88f78f"},{url:"assets/images/Chris Profile.webp",revision:"17b918f12c19da5a795318a593071bb7"},{url:"assets/images/Chris Profile@2x.jpg",revision:"ee94a503b23ad5b27ae64c71a507a871"},{url:"assets/images/Chris Profile@2x.webp",revision:"fac5d1411926467f14c26fb010f8c38a"},{url:"assets/images/contact@2x.jpg",revision:"9767fb5e2b025a7e0c2a72fd1f5b105a"},{url:"assets/images/contact@2x.webp",revision:"4b88c2cdfda29245bf51d5b6faf6cf67"},{url:"assets/images/design.jpg",revision:"74c95fc413093b49afb9c50479cd6a95"},{url:"assets/images/design.webp",revision:"a53a7ec01d02ea7d98e6b5295f3de596"},{url:"assets/images/favicon-black.jpg",revision:"a298f85bb527b764d0416df19b84d8fa"},{url:"assets/images/Group 452-1.png",revision:"bbdaa1f5fc458ea0e324c21d9fee737e"},{url:"assets/images/Group 452.png",revision:"58c85ed3974342ce149e49508fc5f777"},{url:"assets/images/josh-recording.jpg",revision:"4c2c174fd441bacac1a7e203605a6b3a"},{url:"assets/images/josh-recording.webp",revision:"3e5629d281e83d018f798b674433004d"},{url:"assets/images/Larry Profile.jpg",revision:"464caf115e7de3d713b8bef86c3c05ab"},{url:"assets/images/Larry Profile.webp",revision:"e9f9ba6522b4e30941369066cd65fe95"},{url:"assets/images/Larry Profile@2x.jpg",revision:"c35d65b3dc08ce6604390df929f30ee7"},{url:"assets/images/Larry Profile@2x.webp",revision:"783b732c968a513e8af6a55ee90dd432"},{url:"assets/images/LOGO-black.png",revision:"18bab53e7ce57ed4af74d0c9413e349f"},{url:"assets/images/LOGO.png",revision:"e64176b25611a1eaaa85a81ffbed1692"},{url:"assets/images/mat-bevan-3d-artist.jpg",revision:"d83b30f04713945b3ab9d96f017a3ed8"},{url:"assets/images/mat-bevan-3d-artist.webp",revision:"090fe1047318d727b3e3b88fcfd489d4"},{url:"assets/images/Neil Profile.jpg",revision:"ccdd5e61fd7e13953cd8c66267b1f137"},{url:"assets/images/Neil Profile.webp",revision:"c7b5a7bcf2bfc3f3bafff7a19d272b0b"},{url:"assets/images/Neil Profile@2x.jpg",revision:"1c9c833df2f7a9a4d78dfdba92526c88"},{url:"assets/images/Neil Profile@2x.webp",revision:"39120443f3debdb820b31ec47e9bfb91"},{url:"assets/images/Paul Profile.jpg",revision:"89e0be85888f494deffc35c9516a866a"},{url:"assets/images/Paul Profile.webp",revision:"9546ceb57bafa9ac4e0a0ccc842518ae"},{url:"assets/images/Paul Profile@2x.jpg",revision:"1f6443f5723c230336c10761a2a8cb77"},{url:"assets/images/Paul Profile@2x.webp",revision:"156a24c3fabc1904473301df82a2c1eb"},{url:"assets/images/process@2x.jpg",revision:"474b2db3b7c6d43331a9a43c2999aee6"},{url:"assets/images/process@2x.webp",revision:"8f8943c1332a9d3755a9f953b5be83ac"},{url:"assets/images/sam-mat-working.jpg",revision:"b47e2b5e631b0161afec2cfef753c3b2"},{url:"assets/images/sam-mat-working.webp",revision:"fb450652290a57dc817ce9e45baf9a58"},{url:"assets/images/sam-profile.jpg",revision:"7301496a2bde63a350f3febd5c264568"},{url:"assets/images/sam-profile.webp",revision:"f8300e1dc7b5467039b9e02bb52e67df"},{url:"assets/images/sam-profile@2x.jpg",revision:"884c776ef2c4414ba9fa386c2963bd86"},{url:"assets/images/sam-profile@2x.webp",revision:"629274edb0bdf5ff88f32165055a01f4"},{url:"assets/images/who-we-are-hero.jpg",revision:"0504a77b4938ecf80d681b5cc3840d90"},{url:"assets/images/who-we-are-hero.webp",revision:"3be0857fb5154e61800bea738cfdda99"},{url:"assets/libs/DrawSVGPlugin.min.js",revision:"c62dea56535bbb18ae44bb7ee49e931e"},{url:"assets/libs/SplitText.min.js",revision:"3f03894d336c21326a3ef2bd3e75344d"},{url:"assets/models/J&G - Base 4K-white.png",revision:"60f6b63cd960f461b44d6360a0bc9878"},{url:"assets/models/J&G - Base 4K.png",revision:"fd1218a7fe3d51590546093176a6c4f8"},{url:"assets/models/J&G Logo_v01.glb",revision:"23e6c5379287b2c3c6c08285654eb292"},{url:"assets/models/J&G Logo_v09.glb",revision:"616bea4dc8371e45a5b2df3c4a874204"},{url:"assets/models/J&G Logo_v11.glb",revision:"3e1a4d998a90777f1324d9dedf783d1d"},{url:"assets/models/J&G Logo_v12.glb",revision:"8e689722113e9cd5c3db4a03b05cbf85"},{url:"assets/models/J&G Logo_v13.glb",revision:"736688ca559f293155de26fc65d0512c"},{url:"assets/models/J&G Logo_v14-transformed.glb",revision:"d3316aad0d3abba131ee51c91a9bdb2e"},{url:"assets/models/J&G Logo_v14.glb",revision:"dde57502acd9e81b49851930650a5b35"},{url:"assets/models/J&G Logo_v15-transform.glb",revision:"e0e9458691f890b19cb455400fb64b62"},{url:"assets/models/J&G Logo_v15-transformed.glb",revision:"b02dc2167abfce9a759fec085de7a488"},{url:"assets/models/J&G Logo_v15.glb",revision:"e10b59a4c8c47b0c8bee7d32c457e16b"},{url:"assets/models/JG.glb",revision:"d0641b220833cb7e4f6d60886e795376"},{url:"assets/models/scene.glb",revision:"caf17413b13544f0e42b1950be57fef7"},{url:"assets/models/wetransfer_j-g-roughness-4k-png_2022-06-27_0707/J&G Logo_v15.glb",revision:"ec95d396152822a1b079c62eac4eaee7"},{url:"assets/svgs/audio-active-black.svg",revision:"ac331aa3ac3dde5639f2ec2b71b9e8bd"},{url:"assets/svgs/audio-active.svg",revision:"b24c6aaba900467bd16b6300c35a1591"},{url:"assets/svgs/audio-disabled.svg",revision:"a51cf0bcc9addd7df60783c824faff7b"},{url:"assets/svgs/Chart&construct-dark.svg",revision:"88c79240cc13e917787eed134878dd3f"},{url:"assets/svgs/Chart&construct.svg",revision:"0b1d801d60cfb02e1868d836f9efee60"},{url:"assets/svgs/Design&build-dark.svg",revision:"5730a29696c0734f00452177199f9976"},{url:"assets/svgs/Design&build.svg",revision:"337f87a6a97f712e0ee1afb00cbcd009"},{url:"assets/svgs/Observe-dark.svg",revision:"eef2b8efeb57fe3c7a22740f9d9666fd"},{url:"assets/svgs/Observe.svg",revision:"30a9d898dfea3f77b44507aac9705674"},{url:"assets/svgs/scroll-down-dark.svg",revision:"ecacc40c19cedc55918d1e2255945eca"},{url:"assets/svgs/scroll-down.svg",revision:"08fdbd5f077fe14b42ed526b7e9e65bc"},{url:"assets/svgs/Test&iterate-dark.svg",revision:"bbf540e6288a94f7f77d30936d0c7770"},{url:"assets/svgs/Test&iterate.svg",revision:"61f36b110ec48a4890b5f49bb32e1bde"},{url:"browserconfig.xml",revision:"947b777f2ca74c812a5023f27c69dbc5"},{url:"bundler/webpack.common.js",revision:"7f8660f61418ac439a73fe78c4dff4b4"},{url:"bundler/webpack.dev.js",revision:"06f530582ead2df6e0967708a1c815d1"},{url:"bundler/webpack.prod.js",revision:"12c4c191b019a6ad673071a275ca0c92"},{url:"contact.html",revision:"6bb2b1579d50bd95613541ab60d2b4d2"},{url:"css/normalize.css",revision:"8a1230675cc14f82e14af8c0d0bc3993"},{url:"css/style.css",revision:"e3d14c5e352b2f64ede0e32f55c0eca3"},{url:"dist/bundle.js",revision:"4fd1ddb56ecbc0b587bdfe8d0df5f873"},{url:"end-credits.html",revision:"dfb64391f85ebbbd6389d4c0c97e875c"},{url:"favicon-16x16.png",revision:"5e369b303380bd3051c1e6a0c3aeb192"},{url:"favicon-32x32.png",revision:"9646c6ec4f545f1b00d55b25fa502d92"},{url:"favicon.ico",revision:"e85e955ff2af8e184fa712c023807990"},{url:"favicon.png",revision:"45f9cc513d30dfb5191ee66125116d53"},{url:"index.html",revision:"9daa89c2c0771e348a6648511a1ed1db"},{url:"js/draco/draco_decoder.js",revision:"36602bd60bdaba29f063474bf6fe5f39"},{url:"js/draco/draco_decoder.wasm",revision:"07458752c1ac837fcee9288dac8d3c5b"},{url:"js/draco/draco_encoder.js",revision:"19ec7d67f4a209ec8b5fa0a7e0055226"},{url:"js/draco/draco_wasm_wrapper.js",revision:"92166c0fa3f566b2ba676c4a2e2488d7"},{url:"js/draco/gltf/draco_decoder.js",revision:"cd3e53d09acfffb1ce5d6074aac3d74b"},{url:"js/draco/gltf/draco_decoder.wasm",revision:"79123c537a001429fc26e91e99d14218"},{url:"js/draco/gltf/draco_encoder.js",revision:"b3c687f18f58015e032d5d4b5c5c33e8"},{url:"js/draco/gltf/draco_wasm_wrapper.js",revision:"76d5f06fb95f804621f8d04f798cf118"},{url:"js/main.js",revision:"8f44dc78a845898fa6a431cf52cb2bad"},{url:"js/three.js",revision:"dab81700812616c8946e3b9ce2a93286"},{url:"masterpage-detail.html",revision:"774a550f43624ec3827ab168a3b46623"},{url:"masterpage.html",revision:"31113d8585b812562d9f413bbe52bf7c"},{url:"mstile-150x150.png",revision:"814e10e93f7cd4a203b775162dbcf46d"},{url:"package-lock.json",revision:"d014321fcc350b667f63cac95a68a2fa"},{url:"package.json",revision:"97e183d0e06f2762de1e5222211ba145"},{url:"pgia/lib/pgia.js",revision:"e5195f0a25889945fc1f6deabb8ef970"},{url:"pinegrow.json",revision:"1b3b90b25b9d2c079b6c8342d1702134"},{url:"privacy-policy.html",revision:"10fb3a8dc77bcef52da827bb9105d9d7"},{url:"process.html",revision:"9354087b8a2993981f2ef3519fdae605"},{url:"safari-pinned-tab.svg",revision:"a4d6daec083a9c7d5ac60a9e9388c78b"},{url:"samuel-gregory.html",revision:"2d76ba921eeb405eb093f5cfcb789191"},{url:"screenshots/masterpage-detail.png",revision:"128d6f1e50501b17e62ee177da4e2d93"},{url:"screenshots/masterpage.png",revision:"829a0222a5c26808ffc1e9a5334914e2"},{url:"site.webmanifest",revision:"ceb33c9433905fb4757563a14b376f8a"},{url:"styleguide.html",revision:"33a0fe28c5147881f88df98ec3f27c2e"},{url:"terms-and-conditions.html",revision:"875a1c5159871c3961224d6848ab1e31"},{url:"thumbnail.jpg",revision:"519ba86dbf8761e65df6797b8f1c020c"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map