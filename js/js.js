var plant = document.getElementsByClassName('plant');
var zombie = document.getElementById('zombie');
var street = document.getElementById('street');
var pausebtn = document.getElementById('pausebtn');
var bgm = document.getElementById('bgm');
var player = document.getElementsByClassName('player')[0];
var lis = player.getElementsByTagName('li');
var start = document.getElementById('start');
var lefthand = document.getElementById('lefthand');
var righthand = document.getElementById('righthand');
var map = document.getElementById('map');
var earth = document.getElementById('earth');
var pit = earth.getElementsByClassName('pit');
var pitTop = earth.getElementsByClassName('pitTop');
var Pea = earth.getElementsByClassName('Pea');
var bgDay = earth.getElementsByTagName('img');
var second = earth.getElementsByClassName('second');
var sky = document.getElementById('sky');
var PeaArm = sky.getElementsByClassName('PeaArm')[0];
var PeaArmUp = sky.getElementsByClassName('PeaArm-up')[0];
var voice = document.getElementsByClassName('voice');
var startbtn = document.getElementsByClassName('start');
var restart = document.getElementsByClassName('restart');
var foot1 = document.querySelector('.foot1');
var foot2 = document.querySelector('.foot2');
var bgarr = ['img/moring.png', 'img/afternoon.png', 'img/night.png'];
var plantarr = ['img/plant/Cactus.gif', 'img/plant/Chomper.gif', 'img/plant/DoomShroom.gif', 'img/plant/FumeShroom.gif', 'img/plant/HypnoShroom.gif', 'img/plant/IceShroom.gif', 'img/plant/GloomShroom.gif', 'img/plant/Torchwood.gif', 'img/plant/TallNut.gif', 'img/plant/Gralic.gif'];
var Armarr = [{
    pea: 'img/plant/arm/Repeater.gif',
    peaArm: 'img/plant/arm/PB00.gif'
}, {
    pea: 'img/plant/arm/SnowPea.gif',
    peaArm: 'img/plant/arm/SnowPeashooterBullet.gif'
}, {
    pea: 'img/plant/arm/Threepeater.gif',
    peaArm: 'img/plant/arm/PB00.gif'
}, {
    pea: 'img/plant/arm/GatlingPea.gif',
    peaArm: 'img/plant/arm/PB10.gif'
}, {
    pea: 'img/plant/arm/Repeater.gif',
    peaArm: 'img/plant/arm/PB00.gif'
}];
var playerarr = [{
    img: 'img/zombie/DancingZombie/DancingZombie1.gif',
    pos: '-10px 7px',
    static: [{
        img: 'img/zombie/DancingZombie/DancingZombie.png',
        pos: '-5px 5px'
    }],
    touch: [{
        img: 'img/zombie/DancingZombie/SlidingStep.gif',
        pos: '-10px 5px',
        touchimg: 'img/zombie/DancingZombie/0.gif',
        touchpos: '-5px 5px',
    }, {
        img: 'img/zombie/DancingZombie/LostHeadSlidingStep.gif',
        pos: '-10px 9px',
        touchimg: 'img/zombie/DancingZombie/LostHeadSummon.gif',
        touchpos: '0px 5px',
    }, {
        img: 'img/zombie/DancingZombie/Die.gif',
        pos: '-10px 7px',
        touchimg: 'img/zombie/DancingZombie/Head.gif',
        touchpos: '-5px 5px',
    }]
}, {
    img: 'img/zombie/JackinTheBoxZombie/Walk.gif',
    pos: '-55px 7px',
    static: [{
        img: 'img/zombie/JackinTheBoxZombie/0.gif',
        pos: '-50px 6px'
    }],
    touch: [{
        img: 'img/zombie/JackinTheBoxZombie/GoOut.gif',
        pos: '-50px 7px',
        touchimg: 'img/zombie/JackinTheBoxZombie/OpenBox.gif',
        touchpos: '-45px 6px',
    }, {
        img: 'img/zombie/JackinTheBoxZombie/LostHead.gif',
        pos: '-50px 7px',
        touchimg: 'img/zombie/JackinTheBoxZombie/losthead.png',
        touchpos: '-50px 7px',
    }, {
        img: 'img/zombie/JackinTheBoxZombie/Die.gif',
        pos: '-10px 7px',
        touchimg: 'img/zombie/JackinTheBoxZombie/die.png',
        touchpos: '-20px 6px',
    }]
}, {
    img: 'img/zombie/DolphinRiderZombie/walk1.gif',
    pos: '-40px 7px',
    static: [{
        img: 'img/zombie/DolphinRiderZombie/0.gif',
        pos: '-45px 7px'
    }],
    touch: [{
        img: 'img/zombie/DolphinRiderZombie/Walk4.gif',
        pos: '0px 7px',
        touchimg: 'img/zombie/DolphinRiderZombie/Walk4.png',
        touchpos: '-5px 8px',
    }, {
        img: 'img/zombie/DolphinRiderZombie/Die.gif',
        pos: '-70px 7px',
        touchimg: 'img/zombie/DolphinRiderZombie/Die.png',
        touchpos: '-70px 7px',
    }, {
        img: 'img/zombie/DolphinRiderZombie/Die2.gif',
        pos: '20px -10px',
        touchimg: 'img/zombie/DolphinRiderZombie/Die2.png',
        touchpos: '20px -10px',
    }]
}, {
    img: 'img/zombie/Zomboni/1.gif',
    pos: '-25px 27px',
    static: [{
        img: 'img/zombie/Zomboni/0.gif',
        pos: '-30px 27px'
    }],
    touch: [{
        img: 'img/zombie/Zomboni/3.gif',
        pos: '-30px 27px',
        touchimg: 'img/zombie/Zomboni/3.png',
        touchpos: '-30px 27px',
    }, {
        img: 'img/zombie/Zomboni/4.gif',
        pos: '-30px 27px',
        touchimg: 'img/zombie/Zomboni/4.png',
        touchpos: '-30px 27px',
    }, {
        img: 'img/zombie/Zomboni/5.gif',
        pos: '-30px 27px',
        touchimg: 'img/zombie/Zomboni/6.png',
        touchpos: '-30px 27px',
    }]
}];
var dis = 0; //每个植物位置
var Pitdis = 0; //每个坑位置
var seconddis = 0; //每个第二级的位置
var spacing = 450; //每个植物的间隔(距离)
var zNum = 0; //僵尸编号
var spaceOnoff = true;
var jumpOnoff = false;
var fireOnoff = false;
var shakeOnoff1 = true;
var shakeOnoff2 = true;
var shakeOnoff3 = true;
var voiceOnoff = true;
var advanceOnoff = true; //是否按下前进键
var len1 = true;
var len2 = true;
var len3 = true;
var arr = []; //存放被碰撞的植物
var s = 40000; //页面移动的距离
var v = 0.1; //页面移动的速度
var a = 5000;
var max = street.offsetWidth;
var go = 2; //左右方向每次移动的距离
var PeaDis = 300; //每个武器位置
var zombieT1 = 65;
var zombieT2 = 170;
var prevT1 = 65;

zombie.className = 'forward';
// 底部图片运动
var bonOff = false;

function footmove() {
    bonOff = !bonOff;
    if (bonOff) {
        var tar = 50;
    } else {
        tar = 0;
    }
    move(foot1, { bottom: -tar * 0.5 }, 500, 'linear', null, function() {
        footmove();
    });
    move(foot2, { bottom: -tar }, 500, 'linear');
}
footmove();
// 地图背景

// 开始游戏
start.onmouseover = function() {
    this.style.backgroundPosition = '0 5px';
};
start.onmouseout = function() {
    this.style.backgroundPosition = '';
};
start.onclick = function() {
    this.style.display = 'none';
    player.style.display = 'none';
    funkeys();
};

for (var i = 0; i < 2; i++) {
    // 重新载入游戏
    restart[i].onclick = function() {
        if (this.onoff) {
            this.onoff = false;
            this.style.transform = 'rotate(0deg)';
        } else {
            this.onoff = true;
            this.style.transform = 'rotate(360deg)';
        }
        setTimeout(function() {
            window.location.reload();
        }, 600);
    };
}
// 继续和暂停游戏
startbtn[0].onclick = function() {
    pausebtn.style.display = 'none';
    startbtn[1].style.background = 'url(img/images/ico1_02.png) no-repeat';
    startbtn[1].onoff = false;
};
startbtn[1].onclick = function() {
    if (this.onoff) {
        this.onoff = false;
        this.style.background = 'url(img/images/ico1_02.png) no-repeat';
        this.style.backgroundSize = 'cover';
        pausebtn.style.display = 'none';
    } else {
        this.onoff = true;
        this.style.background = 'url(img/images/ico1_01.png) no-repeat';
        this.style.backgroundSize = 'cover';
        pausebtn.style.display = 'block';
    }
};

function fnv(num) {
    if (voiceOnoff) {
        voice[num].style.background = 'url(img/images/ico1_05.png) no-repeat';
        voice[num].style.backgroundSize = 'cover';
    } else {
        voice[num].style.background = 'url(img/images/ico1_04.png) no-repeat';
        voice[num].style.backgroundSize = 'cover';
    }
}
// 关闭和开启声音
voice[0].onclick = voice[1].onclick = function() {
    fnv(0);
    fnv(1);
    voiceOnoff ? bgm.pause() : bgm.play();
    voiceOnoff = !voiceOnoff;
};
// 僵尸静止状态
function staticZombie() {
    zombie.style.background = 'url(' + playerarr[zNum].static[0].img + ')no-repeat';
    zombie.style.backgroundSize = 'cover';
    zombie.style.backgroundPosition = playerarr[zNum].static[0].pos;
}
// 僵尸碰撞后静止状态
function touchstatic(n) {
    zombie.style.background = 'url(' + playerarr[zNum].touch[n].touchimg + ')no-repeat';
    zombie.style.backgroundSize = 'cover';
    zombie.style.backgroundPosition = playerarr[zNum].touch[n].touchpos;
}
// 僵尸行走状态
function walkZombie() {
    zombie.style.background = 'url(' + playerarr[zNum].img + ')no-repeat';
    zombie.style.backgroundSize = 'cover';
    zombie.style.backgroundPosition = playerarr[zNum].pos;
}
// 僵尸碰撞后行走状态
function touchwalk(n) {
    zombie.style.background = 'url(' + playerarr[zNum].touch[n].img + ')no-repeat';
    zombie.style.backgroundSize = 'cover';
    zombie.style.backgroundPosition = playerarr[zNum].touch[n].pos;
}
// 选择僵尸
choiceZombie();

function choiceZombie() {
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onclick = function() {
            zNum = this.index;
            staticZombie();
        };
    }
}
createPlant();
// 生成植物和坑
function createPlant() {
    for (var i = 0; i < 100; i++) {
        var div = document.createElement('div');
        div.className = 'plant';
        dis += (Math.random() + 0.5) * 450;
        div.style.left = dis + 'px';
        var plantNum = Math.floor(Math.random() * 10);
        div.style.background = 'url(' + plantarr[plantNum] + ') no-repeat';
        div.num = plantNum;
        div.style.backgroundSize = 'cover';
        div.touchOnoff = false;
        var span = document.createElement('span');
        var span1 = document.createElement('span');
        dis += (Math.random() + 0.5) * 450;
        span.className = 'pit';
        span1.className = 'pitTop';
        span.style.left = dis + 'px';
        span1.style.left = dis + 'px';
        span.style.width = (Math.random() + 0.6) * 100 + 'px';
        span1.style.width = span.style.width;
        span1.touchOnoff = false;
        earth.appendChild(span);
        earth.appendChild(span1);
        earth.appendChild(div);
    }
}
// 生成第二级和第二级植物
createSecond();

function createSecond() {
    for (var i = 0; i < 100; i++) {
        seconddis += (Math.random() + 0.5) * 1000;
        var div1 = document.createElement('div');
        div1.className = 'second';
        div1.style.left = seconddis + 'px';
        div1.style.width = (Math.random() + 1) * 200 + 'px';
        div1.touchOnoff = false;
        var div = document.createElement('div');
        div.className = 'plant';
        div.style.left = seconddis + Math.random() * 200 + 'px';
        div.style.top = -170 + 'px';
        var plantNum = Math.floor(Math.random() * 10);
        div.style.background = 'url(' + plantarr[plantNum] + ') no-repeat';
        div.num = plantNum;
        div.style.backgroundSize = 'cover';
        div.touchOnoff = false;
        earth.appendChild(div);
        earth.appendChild(div1);
    }
}
// 植物攻击属性
// setInterval(fn4,2000);
// fn4();
function fn4() {
    for (var i = 0; i < plant.length; i++) {
        switch (plant[i].num) {
            case 0: //仙人掌 cactus
                break;
            case 1: //食人花 Chomper
                var Chomper = plant[i];
                move(Chomper, { left: 100 + Chomper.offsetLeft }, 500, 'linear', null, function() {
                    move(Chomper, { left: -100 + Chomper.offsetLeft }, 500, 'linear', null);
                    console.log(Chomper.offsetLeft)
                });
                break;
            case 2: //爆炸菇 DoomShroom
                break;
            case 3: //喷嘴菇 FumeShroom
                break;
            case 4: //眼花菇 HypnoShroom
                var HypnoShroom = plant[i];
                move(HypnoShroom, { left: 100 + HypnoShroom.offsetLeft }, 1000, 'linear', PlantKillZombie, function() {
                    move(HypnoShroom, { left: HypnoShroom.offsetLeft - 100 }, 1000, 'linear', PlantKillZombie);
                });
                break;
            case 5: //冰雹菇 IceShroom
                break;
            case 6: //泡泡菇 GloomShroom
                break;
            case 7: //火树 Torchwood
                break;
            case 8: //坚果 TallNut
                break;
            case 9: //大蒜 Gralic
                var Gralic = plant[i];
                move(Gralic, { left: 100 + Gralic.offsetLeft }, 1000, 'linear', PlantKillZombie, function() {
                    move(Gralic, { left: Gralic.offsetLeft - 100 }, 1000, 'linear', PlantKillZombie);
                });
                break;
        }
    }
}
// 生成豌豆武器植物
createPea();

function createPea() {
    for (var i = 0; i < 50; i++) {
        var div = document.createElement('div');
        div.className = 'Pea';
        var ballNum = Math.floor(Math.random() * 4);
        div.style.background = 'url(' + Armarr[ballNum].pea + ') no-repeat';
        div.ball = ballNum;
        div.style.backgroundSize = 'cover';
        PeaDis += (Math.random() + 1) * 1000;
        div.style.left = PeaDis + 'px';
        earth.appendChild(div);
    }
}

// 生成背景
var bgdis = 0;
createBg();

function createBg() {
    for (var i = 0; i < 50; i++) {
        var img = document.createElement('img');
        img.src = 'img/xkbg.png';
        img.style.left = bgdis + 'px';
        bgdis += 1353;
        earth.appendChild(img);
    }
}
// 碰撞检测
function touch(obj1, obj2) {
    var post1 = obj1.getBoundingClientRect();
    var post2 = obj2.getBoundingClientRect();
    if (post1.left > post2.right - 40 || post1.right < post2.left + 40 || post1.bottom < post2.top + 20 || post1.top > post2.bottom) {
        return false;
    } else {
        return true;
    }
}
// 子弹碰撞植物后触发
function armKillPlant() {
    for (var i = 0; i < plant.length; i++) {
        if (touch(this, plant[i])) {
            this.style.display = 'none';
            plant[i].style.display = 'none';
        }
    }
}
// 僵尸是否跳到第二台	
function judge() {
    var onSec = false;
    for (var i = 0; i < second.length; i++) {
        if (goSecond(zombie, second[i])) {
            onSec = true;
            break;
        }
    }
    return onSec;
}
// 僵尸碰撞植物时抖动
function shake(obj, attr, endFn) {
    var arr = [];
    var timer = null;
    var n = 0;
    obj.num = parseFloat(zombie.offsetLeft);
    //拿到一组数字，抖动的幅度。
    for (var i = 20; i > 0; i -= 2) {
        arr.push(i, -i);
    }
    arr.push(0);
    //用定时器来实现抖动效果。
    clearInterval(timer);
    timer = setInterval(function() {
        n++;
        if (n > arr.length - 1) {
            clearInterval(timer);
            endFn && endFn();
        }
        obj.style[attr] = arr[n] + obj.num + 'px';
    }, 30);
}
// 判断是否碰到第二层
function goSecond(obj1, obj2) {
    var post1 = obj1.getBoundingClientRect();
    var post2 = obj2.getBoundingClientRect();
    if (post1.right > post2.left && post1.left < (post2.right - 15) && post1.bottom < (post2.top + 10)) {
        return true;
    } else {
        return false;
    }
}

// 僵尸碰撞植物后触发
function PlantKillZombie() {
    // 每超过5000px提速,共7次
    // var earthL=-(earth.offsetLeft);
    // var v1=v;
    // v=Math.ceil(earthL/a)/10;
    // if(v1!==v){
    // 	move(earth,{left:-s},(s/v),'linear',PlantKillZombie,function(){
    // 		zombie.style.background='url('+playerarr[zNum].static[0].img+')no-repeat';
    // 		zombie.style.backgroundSize='cover';
    // 		zombie.style.backgroundPosition=playerarr[zNum].static[0].pos;
    // 	});
    // }
    // 
    // for (var i = 0; i < plant.length; i++) {
    // 	switch (plant[i].num){
    // 		case 0://仙人掌 cactus
    // 		break;
    // 		case 1://食人花 Chomper
    // 			var Chomper=plant[i];
    // 			move(Chomper,{left:100+Chomper.offsetLeft},1000,'linear',PlantKillZombie,function(){
    // 				move(Chomper,{left:Chomper.offsetLeft},1000,'linear',PlantKillZombie);
    // 			});
    // 		break;
    // 		case 2://爆炸菇 DoomShroom
    // 		break;
    // 		case 3://喷嘴菇 FumeShroom
    // 		break;
    // 		case 4://眼花菇 HypnoShroom
    // 			 var HypnoShroom=plant[i];
    // 			 move(HypnoShroom,{left:100+HypnoShroom.offsetLeft},1000,'linear',PlantKillZombie,function(){
    // 			 	move(HypnoShroom,{left:HypnoShroom.offsetLeft},1000,'linear',PlantKillZombie);
    // 			 });
    // 		break;
    // 		case 5://冰雹菇 IceShroom
    // 		break;
    // 		case 6://泡泡菇 GloomShroom
    // 		break;
    // 		case 7://火树 Torchwood
    // 		break;
    // 		case 8://坚果 TallNut
    // 		break;
    // 		case 9://大蒜 Gralic
    // 			var Gralic=plant[i];
    // 			move(Gralic,{left:100+Gralic.offsetLeft},1000,'linear',PlantKillZombie,function(){
    // 			 	move(Gralic,{left:Gralic.offsetLeft},1000,'linear',PlantKillZombie);
    // 			});
    // 		break;
    // 	}
    // }
    // 僵尸是否掉入水坑
    for (var i = 0; i < pitTop.length; i++) {
        if (touch(zombie, pitTop[i])) {
            pitTop.onOff = true;
        }
    }
    if (pitTop.onOff) {
        zombie.style.transform = 'rotate(360deg)';
        zombie.style.transition = '1s';
        zombie.style.bottom = -85 + 'px';
        clearInterval(earth.time);
        setTimeout(function() {
            window.location.reload();
        }, 1000);
    }
    // 僵尸是否吃到武器
    for (var i = 0; i < Pea.length; i++) {
        if (touch(zombie, Pea[i])) {
            PeaArm.style.left = zombie.offsetLeft + 60 + 'px';
            PeaArm.style.background = 'url(' + Armarr[Pea[i].ball].peaArm + ') no-repeat';
            PeaArm.style.backgroundSize = 'cover';
            Pea[i].style.display = 'none';
            PeaArm.onOff = true;
            // 三发子弹
            if (Pea[i].ball == 2) {
                PeaArm.Threepeater = true;
            } else {
                PeaArm.Threepeater = false;
            }
        }
    }
    // 判断僵尸是否在第二级上
    if (judge()) {
        zombieT1 = 170;
    } else {
        zombieT1 = 65;
    }!jumpOnoff && (zombie.style.bottom = zombieT1 + 'px');
    // 该植物是否被碰撞,每个植物只允许被碰撞一次
    for (var i = 0; i < plant.length; i++) {
        if (touch(zombie, plant[i])) {
            if (!plant[i].touchOnoff) {
                plant[i].touchOnoff = true;
                arr.push(plant[i]);
            }
        }
    }
    if (arr.length == 1) {
        if (shakeOnoff1) {
            shake(zombie, 'left');
            shakeOnoff1 = false;
        }
        if (len1) {
            PeaArm.onOff = false;
            len1 = false;
        }
        touchwalk(0);
    } else if (arr.length == 2) {
        if (shakeOnoff2) {
            shake(zombie, 'left');
            shakeOnoff2 = false;
        }
        if (len2) {
            PeaArm.onOff = false;
            len2 = false;
        }
        touchwalk(1);
    } else if (arr.length == 3) {
        if (shakeOnoff3) {
            shake(zombie, 'left');
            shakeOnoff3 = false;
        }
        touchwalk(2);
        zombie.style.width = 85 + 'px';
        clearInterval(earth.time);
        setTimeout(function() {
            window.location.reload();
        }, 2000);
    }
}
// 功能键
function funkeys() {
    var time = null;
    window.onkeydown = function(e) {
        if (!pitTop.onOff) {
            switch (e.which) {
                //D键 前进
                case 68:
                    if (advanceOnoff) {
                        walkZombie();
                        advanceOnoff = false;
                    }
                    PlantKillZombie();
                    move(earth, { left: -s }, (s / v), 'linear', PlantKillZombie);
                    zombie.className = 'forward';
                    var zombieL = zombie.offsetLeft;
                    var tar = zombieL + go;
                    if (tar < 0) {
                        tar = 0;
                    }
                    if (tar > (max - zombie.offsetWidth)) {
                        tar = max - zombie.offsetWidth;
                    }
                    zombie.style.left = tar + 'px';
                    break;
                    // A键 后退
                case 65:
                    if (advanceOnoff) {
                        walkZombie();
                        advanceOnoff = false;
                    }
                    PlantKillZombie();
                    move(earth, { left: s }, (s / v), 'linear', PlantKillZombie);
                    zombie.className = '';
                    var zombieL = zombie.offsetLeft;
                    var tar = zombieL - go;
                    if (tar < 0) {
                        tar = -10;
                    }
                    if (tar > (max - zombie.offsetWidth)) {
                        tar = max - zombie.offsetWidth;
                    }
                    zombie.style.left = tar + 'px';
                    break;
                    // H键 发射子弹
                case 72:
                    if (PeaArm.onOff) {
                        if (!fireOnoff) {
                            fireOnoff = true;
                            if (PeaArm.Threepeater) {
                                PeaArmUp.style.display = 'block';
                                PeaArmUp.style.left = zombie.offsetLeft + 60 + 'px';
                                PeaArmUp.style.top = zombie.offsetTop + 60 + 'px';
                                console.log(PeaArmUp);
                            }
                            PeaArm.style.display = 'block';
                            PeaArm.style.left = zombie.offsetLeft + 60 + 'px';
                            PeaArm.style.top = zombie.offsetTop + 60 + 'px';
                            if (zombie.className === '') {
                                if (PeaArm.Threepeater) {
                                    PeaArmUp.className = 'PeaArm-up forward';
                                    PeaArmUp.style.left = zombie.offsetLeft + 20 + 'px';
                                    move(PeaArmUp, { left: -200 + zombie.offsetLeft, top: 140 }, 1400, 'linear', armKillPlant, function() {
                                        PeaArmUp.style.display = 'none';
                                        fireOnoff = false;
                                    });
                                }
                                PeaArm.className = 'PeaArm forward';
                                PeaArm.style.left = zombie.offsetLeft + 20 + 'px';
                                move(PeaArm, { left: -200 + zombie.offsetLeft, top: 350 }, 1400, 'linear', armKillPlant, function() {
                                    PeaArm.style.display = 'none';
                                    fireOnoff = false;
                                });
                            } else {
                                if (PeaArm.Threepeater) {
                                    PeaArmUp.className = 'PeaArm-up';
                                    move(PeaArmUp, { left: 300 + zombie.offsetLeft, top: 140 }, 1400, 'linear', armKillPlant, function() {
                                        PeaArmUp.style.display = 'none';
                                        fireOnoff = false;
                                    });
                                }
                                PeaArm.className = 'PeaArm';
                                move(PeaArm, { left: 300 + zombie.offsetLeft, top: 350 }, 1400, 'linear', armKillPlant, function() {
                                    PeaArm.style.display = 'none';
                                    fireOnoff = false;
                                });
                            }
                        }
                    }
                    break;
                    // 空格键  跳跃
                case 32:
                    if (spaceOnoff) {
                        if (judge()) {
                            zombieT2 = 290;
                        } else {
                            zombieT2 = 170;
                        }
                        jumpOnoff = true;
                        spaceOnoff = false;
                        move(zombie, { bottom: zombieT2 }, 800, 'linear', PlantKillZombie, function() {
                            if (zombieT2 == zombieT1) {
                                spaceOnoff = true;
                                jumpOnoff = false;
                                return;
                            }
                            move(zombie, { bottom: zombieT1 }, 800, 'linear', PlantKillZombie, function() {
                                spaceOnoff = true;
                                jumpOnoff = false;
                            });
                        });
                    }
                    break;
            }
        }
    };
    window.onkeyup = function(e) {
        if (e.which == 68 || e.which == 65) {
            advanceOnoff = true;
            clearInterval(earth.time);
            if (arr.length == 1) {
                touchstatic(0);
            } else if (arr.length == 2) {
                touchstatic(1);
            } else if (arr.length == 3) {
                touchstatic(2);
            } else {
                staticZombie();
            }
        }
    };
}
