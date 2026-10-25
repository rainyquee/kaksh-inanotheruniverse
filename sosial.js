/* ===== Notifikasi random, DM & komentar IG, telepon dinamis ===== */
(function(){
const X=window.IGX,R=Math.random,pick=a=>a[R()*a.length|0],q=s=>document.querySelector(s),hr=()=>new Date().getHours();
const SOC=window.SOC={th:{shrain:X.IGM,rainyquee:[['m',"rdr2\ngta5\nspiderman miles morales\nmarvel spiderman\nfarcry5\nuncharted\nre4\ndetroit become human\nbattlefield\nblack ops\nmiside\nfactorio\nbeamngdrive\ndome keeper\ndying light 2\nmount and blade\nplant vs zombi\nresident evil 2\nsenren banka\nschedule 1\nsnow runner\nthe last of us\ntotally accurate battle simulator\n7 days to die\nage of empires\ndoom eternal\nescape from tarkov\nelden ring nightreign\neuro truck simulator\nhearts of iron\ninternet cafe simulator\ninzoi\noblivion remastered\npoppy 6\nskyrim\nsubnautica\nsubnautica below zero\nwwe 2k25\nthe killing antidote\nbattlefield 6\ndave the driver\nfor the king\ngarry's mod\ngears 5\nghost runner 2\nleft 4 dead\nlethal company\nmanor lords\none piece 4\novercooked 2\npalworld\npokemon legends arceus\nready or not\nteardown"],['m','https://limewire.com/d/4w6mZ#apicuqJVmI']]},un:{},pv:{},ts:{},cu:{},hist:{},calls:{},icalls:{},on:{shrain:1},sub:{},busy:null,rc:[['mma','Kemarin'],['nad','Jumat'],['mma','Kamis']]};
const LH={},pk=(k,L)=>{const h=LH[k]=LH[k]||[];let i,g=0;do{i=R()*L.length|0}while(h.includes(i)&&g++<30);h.push(i);if(h.length>Math.min(4,L.length-1))h.shift();return L[i]};
const MP=['woi rai, kenapa? gue lagi main nih','bentar, gue pause dulu gamenya','ntar futsal nggak? kita kurang satu orang','lu udah ngerjain tugas belum? gue belum sama sekali','ngapain nelpon, chat aja napa','wah tumben, ada apaan?','bro gue lagi di jalan, ngomong cepet','kopi kampus buka sampe jam delapan lho','lu jadi cerita ke dia nggak? penasaran gue','bentar, gue lagi makan, lanjut ntar ya','eh lu tau nggak, gue baru denger kabar aneh'];
const MA=[['yaelah rai, baru aja nelpon','apaan sih lu, spam amat'],['WOI! lu kenapa sih nelpon mulu?!','gue lagi sibuk bro, jangan ganggu!'],['gue matiin ya! lu ganggu banget!','udah, nomor lu gue mute!']];
const PE={
rai:{n:'Kak Sh',ig:'shrain',num:'088989747480',tol:4,
 L:['ada apa rai? kangen ya?','lagi ngurus berkas wisuda nih, ngomong cepetan dong','aku baru aja mau chat kamu loh','denger suara kamu aku jadi lupa mau ngomong apa','lagi sama ayah ini, bentar ya','nggak ada kabar baru kok, kamu yang cerita dong','rai, jangan lupa makan ya','aku lagi beresin kardus, banyak banget bukunya','hehe, nelpon cuma buat denger aku bilang halo?','bentar, aku cari tempat sepi dulu, jangan ditutup','bukunya masih aman di tas aku, tenang'],
 A:[['iih rai, barusan kan udah nelpon','kenapa sih nelpon terus? kamu kenapa?'],['rai, aku lagi sibuk nih, nanti aku telpon balik ya','aku mulai kesel nih, tapi dikit doang'],['oke aku tutup dulu ya, nanti kita ngobrol, jangan ngambek','rai, serius deh, nanti aja ya. ini kebanyakan']],
 O:['rai, kamu udah makan?','lagi apa? aku lagi bosen packing','liat langit dari jendelamu nggak hari ini? bagus']},
mma:{n:'Ibu',num:'081234560001',tol:0,
 L:['iya Nak, ada apa? ibu lagi di dapur','sudah makan belum, Rai?','kamu sehat kan? jangan begadang ya','uang jajannya masih cukup nggak?','kapan pulang? ibu masakin yang kamu suka','salam buat Kak Sh ya','ibu lagi pengajian, nanti ibu telpon balik ya','Rai, jangan lupa salat ya, Nak','bapak nanyain kamu terus lho','kok tumben nelpon? ada yang kamu butuhin?'],
 A:[['Rai, tadi kan sudah nelpon, ada apa sih?','ibu lagi sibuk, Nak, kalau nggak penting nanti aja ya'],['Raihan! telpon terus nggak ngomong, ibu jadi khawatir sekaligus kesel','kamu ini kenapa? jangan main-main sama ibu ya'],['Ibu matiin ya! nanti pulang kamu ibu marahin','Ibu tutup. Jangan telpon-telpon nggak jelas lagi!']]},
nad:{n:'Nadia',ig:'nadiaaa',num:'081234560002',tol:0,
 L:['iya rai, kenapa? tugas kelompok ya?','bentar, aku lagi di kampus nih','rai, kamu udah chat Kak Sh belum? hehe','aduh sinyalku jelek, ngomong yang jelas ya','lagi nugas nih, ganggu aja kamu','eh aku baru mau telpon kamu loh, serius','kamu tuh ya, kalau nelpon pasti ada maunya','bentar, aku lagi di jalan, berisik banget','ada gosip baru nih, tapi nanti aja ya','kamu udah makan? aku laper banget'],
 A:[['rai, apaan sih nelpon terus','nanti aja ngomongnya, aku lagi sibuk'],['Raihan!! kamu ganggu banget deh, aku lagi nugas!','stop dong nelponnya, aku kesel nih'],['udah ya, aku blokir nomor kamu kalo gini terus!','AKU MATIIN YA, JANGAN TELPON LAGI!']],
 O:['rai, tugas kelompok udah kamu kumpulin?','kamu udah baca postingan aku belum?','rai, besok kuliah pagi nggak?']},
dim:{n:'Dimas',ig:'dimas.futsal',num:'081234560003',tol:1,L:MP,A:MA,O:['rai, futsal sabtu jadi nggak?','woi online nggak? mabar yuk','fotonya bagus bro, kameranya apa?']},
riz:{n:'Rizky',ig:'rizky.ptr_',num:'081234560004',tol:1,L:MP,A:MA,O:['bro, pinjem catatan hadis dong','rai, besok ada kuis ga sih?','lu masih utang kopi ke gue wkwk']},
alv:{n:'Alvin',ig:'alvn_04',num:'081234560005',tol:1,L:MP,A:MA,O:['rai, spek pc yang waktu itu jadi beli?','woi, ada info kos murah nggak?','bro, nonton bola nanti malem yuk']}};
const BY={},IGO={};
Object.keys(PE).forEach(k=>{const P=PE[k];if(P.ig){BY[P.ig]=k;IGO[P.ig]=P.O}});
Object.assign(IGO,{'mey':['rai, aku liat storymu, lucu banget','kak rai, boleh minta fotonya yang kemarin?'],'jo.elmrt':['woi, lama nggak muncul','rai, lagi di mana?'],'kopi.kampus':['Halo kak Raihan, promo kopi susu beli 2 gratis 1 hari ini!','Kak, kopi susunya sudah siap diambil ya ☕'],'dollkitty.xx':['hai rai, boleh follow back?'],'cunn.wijaya':['rai, ini beneran kamu yang di foto futsal?']});
const GR=['hehe iya','oke deh','wkwk serius?','nanti kabarin ya','sip siap','hah? maksudnya gimana?','boleh boleh','iya makasih ya'],PRX=['wkwk bagus','udah liat kemarin, keren','lucu juga ini','ini kapan fotonya?','mantep, makasih ya','haha iya aku liat tadi'];
const CW=['dimas.futsal','nadiaaa','rizky.ptr_','alvn_04','mey','jo.elmrt','dollkitty.xx','cunn.wijaya','kopi.kampus'],CT=['mantap rai','wkwk gokil','kapan-kapan ajak aku dong','bagus banget fotonya','aesthetic abis','😂😂','keren','ini di mana sih?','baru liat, bagus','hayo lagi sama siapa itu','dua kopi... buat siapa nih 👀','jadi pengen ke sana'],RPC=['makasih yaa','hehe iya','wkwk bisa aja','nanti kuajak','iya dong'];
const TP=[['halo? ini masih subuh lho, ','hoaam.. ','jam segini?? '],['pagi-pagi udah nelpon, ','halo, pagi, ','iya halo? lagi sarapan nih, '],['halo, siang bolong gini, ','iya? lagi istirahat, ','halo siang, '],['halo, sore-sore gini, ','iya? baru pulang nih, ','sore, '],['halo, malem-malem, ','iya? lagi santai nih, ','malem, '],['halo?? udah larut malem nih, ','belum tidur juga? ','jam segini masih melek, ']];
const bk=h=>h<5?0:h<11?1:h<15?2:h<18?3:h<23?4:5;
/* ---- DM ---- */
SOC.thread=n=>SOC.th[n]||(SOC.th[n]=[]);
SOC.badge=()=>Object.values(SOC.un).concat(Object.values(SOC.cu)).reduce((a,b)=>a+(b||0),0);
SOC.fix=L=>{Object.keys(SOC.th).forEach(n=>{if(n!='shrain'&&SOC.th[n].length&&!L.some(r=>r[0]==n))L.unshift([n,'',L.length%6,0,0,0])});L.sort((a,b)=>(a[0]=='shrain'?-1:b[0]=='shrain'?1:0)||(SOC.ts[b[0]]||0)-(SOC.ts[a[0]]||0))};
const inChat=n=>app=='ig'&&sv=='igc'&&X.IGN==n;
function push(n,t){SOC.act(n,45e3+R()*6e4);const th=SOC.thread(n),l=th[th.length-1];if(l&&l[0]=='t')l[2]=0;th.push(['t',t,1]);SOC.pv[n]=t.slice(0,34);SOC.ts[n]=Date.now();
 if(inChat(n)){tone(1318,.1,.04);page(1)}else{SOC.un[n]=(SOC.un[n]||0)+1;if(app=='ig'&&sv=='igd')page(1);else if(!app&&typeof home=='function')home()}}
SOC.sent=(n,s)=>{if(n=='rainyquee'){SOC.ts[n]=Date.now();SOC.pv[n]='Anda: '+s.slice(0,28);return}const id=BY[n],P=id&&PE[id],now=Date.now(),H=(SOC.hist[n]=(SOC.hist[n]||[]).filter(t=>now-t<45e3));H.push(now);SOC.ts[n]=now;SOC.pv[n]='Anda: '+s.slice(0,28);SOC.un[n]=0;
 const lv=Math.min(3,H.length-2-(P?P.tol:1));let t;
 if(lv>0&&P){if(lv>=3&&R()<.4)return;t=pk(n+'a'+lv,P.A[lv-1])}else t=/Postingan|📷/.test(s)?pick(PRX):P?pk(n,P.L):pk('gr'+n,GR);
 _st(()=>push(n,t),1200+R()*2200)};
/* ---- komentar ---- */
SOC.cmView=()=>{const i=X.IGI,p=X.IGPS[i],esc2=esc;SOC.cu[i]=0;PH0.ig='Add a comment...';
 const L=p.cm.map((c,j)=>`<div style="display:flex;gap:10px;padding:8px 14px 8px ${c[5]?52:14}px;align-items:flex-start"><div style="flex:none">${X.IGP(j+1,34,0,c[0])}</div><div style="flex:1;min-width:0;font-size:14.5px;line-height:1.35"><b>${c[0]}</b> <span style="color:#a8adb8;font-size:12px">${c[4]||''}</span><div>${esc2(c[1])}</div><button class="lk" data-rp="${j}" style="color:#a8adb8;font-size:12px;padding:0">${c[2]?c[2]+' likes · ':''}Reply</button></div><button data-clk="${j}" style="flex:none;width:30px;font-size:19px;color:${c[3]?'#ff3040':'#a8adb8'}">${c[3]?'♥':'♡'}</button></div>`).join('');
 return `<div class="sx igpd" style="padding:50px 0 110px;color:#fff"><div style="display:flex;align-items:center;justify-content:space-between;height:48px;padding:0 6px"><button data-b="1" aria-label="Kembali" style="color:#fff;width:44px;height:44px;display:grid;place-items:center">${X.CH}</button><b style="font-size:17px">Comments</b><span style="width:44px"></span></div><div style="display:flex;gap:10px;padding:8px 14px 12px;border-bottom:.5px solid #222;font-size:14.5px;line-height:1.35"><div style="flex:none">${X.IGP(2,34,0,'rainyquee')}</div><div><b>rainyquee</b> ${esc2(p.cap)}</div></div>${L}</div><div class="igi hs" style="padding-bottom:${kbo?10:34}px;background:#000">${SOC.rp?`<div style="display:flex;justify-content:space-between;padding:6px 16px;font-size:13px;color:#a8adb8">Replying to @${SOC.rp.n}<button data-rpx="1" style="color:#fff">✕</button></div>`:''}<div class="igpill"><div class="fld igf" data-f="ig"><span class="fv">${fld('ig')}</span></div><button class="igs" data-igs="1">Send</button></div></div>`};
SOC.cmt=s=>{const i=X.IGI,p=X.IGPS[i];const rp=SOC.rp;if(rp){let k=p.cm.indexOf(rp.row)+1;while(p.cm[k]&&p.cm[k][5])k++;p.cm.splice(k,0,['rainyquee','@'+rp.n+' '+s,0,0,'just now',1]);SOC.rp=null;PH0.ig='Add a comment...'}else p.cm.push(['rainyquee',s,0,0,'just now']);tone(620,.07,.05);page(1);const sc=q('#ap .sx');sc&&(sc.scrollTop=1e5);
 if(rp){if(R()<.85)_st(()=>{let k=p.cm.indexOf(rp.row)+1;while(p.cm[k]&&p.cm[k][5])k++;p.cm.splice(k,0,[rp.n,'@rainyquee '+pick(RPC),0,0,'just now',1]);if(app=='ig'&&sv=='igcm'&&X.IGI==i){page(1)}else SOC.cu[i]=(SOC.cu[i]||0)+1},2000+R()*2000);return}
 if(R()<.55)_st(()=>{p.cm.push([pick(CW),'@rainyquee '+pick(RPC),0,0,'just now']);if(app=='ig'&&sv=='igcm'&&X.IGI==i){page(1);const c=q('#ap .sx');c&&(c.scrollTop=1e5)}else SOC.cu[i]=(SOC.cu[i]||0)+1},2000+R()*3000)};
PH0.ig='Message...';PAR.igcm='igp';document.addEventListener('click',e=>{if(!app||sv!='igcm')return;const b=e.target.closest('[data-rp]');if(b){const c=X.IGPS[X.IGI].cm[+b.dataset.rp];SOC.rp={n:c[0],row:c};PH0.ig='Reply to @'+c[0]+'...';openKb('ig');page(1);return}if(e.target.closest('[data-rpx]')){SOC.rp=null;PH0.ig='Add a comment...';page(1)}});
const _pg=page;page=function(na){PH0.ig='Message...';_pg(na);if(sv=='tel'&&!tt)telx()};
/* ---- klik: komentar, like komentar, bagikan ---- */
function share(){const o=document.createElement('div');o.className='al';o.style.cssText='align-items:end;padding:0;z-index:96';
 o.innerHTML=`<div style="width:100%;background:#1c1f26;border-radius:20px 20px 0 0;padding:14px 0 30px;color:#fff;max-height:72%;overflow:auto"><div style="text-align:center;font-weight:700;padding-bottom:8px">Kirim ke</div>${CW.filter(n=>n!='kopi.kampus').concat('shrain').map(n=>`<div style="display:flex;align-items:center;gap:12px;padding:8px 18px">${X.IGP(0,44,0,n)}<b style="flex:1">${n}</b><button data-shs="${n}" style="padding:7px 18px;border-radius:8px;background:#0095f6;color:#fff;font-weight:600">Send</button></div>`).join('')}<button data-shx="1" style="display:block;margin:10px auto 0;color:#a8adb8">Close</button></div>`;q('#ph').appendChild(o)}
document.addEventListener('click',e=>{if(app!='ig')return;const t=e.target;let b;
  if(b=t.closest('[data-igcall]')){if(sv=='igc')igCall(X.IGN,b.dataset.igcall=='v');return}
 if(t.closest('[data-igcm]')){sv='igcm';page();return}
 if(b=t.closest('[data-clk]')){const c=X.IGPS[X.IGI].cm[+b.dataset.clk];c[3]=c[3]?0:1;c[2]=(c[2]||0)+(c[3]?1:-1);b.textContent=c[3]?'♥':'♡';b.style.color=c[3]?'#ff3040':'#a8adb8';const l=b.parentElement.querySelector('.lk');if(l)l.textContent=(c[2]?c[2]+' suka · ':'')+'Balas';tone(c[3]?1200:700,.04,.03);b.animate([{transform:'scale(1.5)'},{transform:'none'}],220);return}
 if(t.closest('[data-igsh]')){closeKb();share();return}
 if(t.closest('[data-shx]')){const o=q('#ph .al');o&&o.remove();return}
 if(b=t.closest('[data-shs]')){if(b.disabled)return;b.disabled=1;b.textContent='Terkirim';b.style.background='#3a3d44';const n=b.dataset.shs,p=X.IGPS[X.IGI];SOC.thread(n).push(['m','📷 Postingan rainyquee: '+p.cap,clk()]);tone(620,.07,.05);SOC.sent(n,'📷 Postingan')}});
/* ---- notifikasi ---- */
function banner(sk,title,body,sx,em,col){tone(880,.2);tone(1175,.3);
 const ic=sx||sk=='ig'?IC.ig:`<div style="width:100%;height:100%;background:${col};display:grid;place-items:center;font-size:22px">${em}</div>`,b=document.createElement('div');b.className='bn';b.dataset.sx=sx||'';
 b.innerHTML=`<div class="nc" data-sx="${sx||''}" data-sk="${sx?'':sk}"><div class="ni">${ic}</div><div style="flex:1;min-width:0"><div class="nh"><span>${esc(title)}</span><small>sekarang</small></div><div class="nb">${esc(body)}</div></div></div>`;
 q('#ph').appendChild(b);swp(b);_st(()=>{if(b.isConnected)b.animate([{transform:'none'},{transform:'translateY(-150%)'}],{duration:300,fill:'forwards'}).onfinish=()=>b.remove()},4800);
 if(!app)home()}
const NI=[['sp','Shopee','Flash sale mulai jam 12.00! Diskon sampai 90%','🛍','#ee4d2d'],['tp','Tokopedia','Voucher gratis ongkir buat kamu, cek sekarang','🛒','#03ac0e'],['gj','Gojek','GoRide diskon 50% sampai jam 22.00','🛵','#00aa13'],['pn','Pinterest','Pin baru untukmu: kamar estetik','📌','#e60023'],['fb','Facebook','Rizky Pratama menandaimu di sebuah foto','f','#1877f2'],['x','X','Untuk kamu: trending di Indonesia','X','#111'],['gp','Play Store','Pembaruan tersedia untuk 4 aplikasi','▶','#01875f'],['sf','MySmartfren','Sisa kuota kamu tinggal 2 GB','💬','#e3114f'],['ml','Mobile Legends','Event baru: login 7 hari dapat skin gratis','🎮','#1b2a6b'],['pk','Paket','Paketmu sedang dalam perjalanan','📦','#34c759']];
function nonN(){if(R()<.3){const p=X.IGPS[R()*3|0],w=pick(CW),f=R()<.5;if(f)p.lk++;banner('ig','Instagram',f?w+' menyukai postingan Anda':w+' mulai mengikuti Anda');return}const a=pick(NI);banner(a[0],a[1],a[2],'',a[3],a[4])}
function dmN(){const n=pick(Object.keys(IGO)),t=pick(IGO[n]);if(!inChat(n))banner('ig',n,t,'dm:'+n);push(n,t)}
function cmN(){const i=R()*3|0,p=X.IGPS[i],w=pick(CW),t=pick(CT);p.cm.push([w,t,0,0,'just now']);banner('ig','Instagram',w+' mengomentari postinganmu: "'+t+'"','cm:'+i);if(app=='ig'&&sv=='igcm'&&X.IGI==i){SOC.cu[i]=0;page(1)}else SOC.cu[i]=(SOC.cu[i]||0)+1}
SOC.notify=()=>{const r=R();r<.33?dmN():r<.55?cmN():nonN()};
SOC.go=sx=>{const[k,a]=sx.split(':'),it=NLX.NL.find(n=>n.raw&&n.raw.includes('data-sx="'+sx+'"'));it&&NLX.rm(it.id);
 const run=()=>{if(k=='dm'){X.IGN=a;X.IGM=SOC.thread(a);SOC.un[a]=0;sv='igc'}else{X.IGI=+a;SOC.cu[a]=0;sv='igcm'}page()};
 if(app=='ig'){run();return}
 const go2=()=>{const el=q('#hm [data-o="ig"]');if(el){openApp('ig',el);_st(run,80)}};if(app){closeApp();_st(go2,520)}else go2()};
document.addEventListener('click',e=>{const b=e.target.closest('.bn[data-sx]');if(!b)return;e.stopPropagation();const sx=b.dataset.sx;b.remove();if(sx&&v=='home')SOC.go(sx)},true);
let px=0;document.addEventListener('pointerdown',e=>{px=e.clientX},true);
document.addEventListener('click',e=>{const c=e.target.closest('#k_n .k_nt,#nl .k_nt');if(!c||Math.abs(e.clientX-px)>10||e.target.closest('[data-kx],.k_cv'))return;const nc=c.querySelector('[data-sx]');if(!nc||!nc.dataset.sx||v!='home')return;e.stopPropagation();e.preventDefault();const sx=nc.dataset.sx;NLX.rm(+c.dataset.id);NLX.close();_st(()=>SOC.go(sx),380)},true);
(function loop(){_st(()=>{try{SOC.notify()}catch(err){}loop()},18e4+R()*12e4)})();
/* ---- telepon ---- */
const nmOf=id=>id=='rai'?ch[0].n:PE[id].n;
function telx(){const sc=q('#ap .sc');if(!sc)return;sc.querySelectorAll('.rc').forEach(e=>e.remove());
 const row=(id,t,m)=>`<button class="rc" data-cl="${id}"><div><b class="${m?'ms2':''}">${nmOf(id)}</b><small>${id=='rai'?PE.rai.num:'seluler'}</small></div><span>${t}</span><u>ⓘ</u></button>`;
 sc.insertAdjacentHTML('beforeend',SOC.rc.map(a=>row(a[0],a[1],a[2])).join('')+'<div class="big" style="font-size:24px;margin-top:16px">Contacts</div>'+Object.keys(PE).map(k=>row(k,'')).join(''))}
const _oc=callTo;
callTo=function(n){const id=PE[n]?n:Object.keys(PE).find(k=>PE[k].num==String(n).replace(/\D/g,''));
 if(!id||(id=='rai'&&st>=LIVE.length&&!done))return _oc(n);
 const P=PE[id],now=Date.now(),H=(SOC.calls[id]=(SOC.calls[id]||[]).filter(t=>now-t<48e4));H.push(now);const lv=Math.min(3,H.length-1-P.tol);
 closeKb();F['c'+n]=1;F['c'+id]=1;
 let tx=null;if(lv>0)tx=pk(id+'a'+lv,P.A[lv-1]);else if(R()>.12)tx=pick(TP[bk(hr())]).replace(/\.\. $/,'.. ')+pk(id,P.L);
 SOC.rc.unshift([id,clk(),tx?0:1]);SOC.rc.length=Math.min(SOC.rc.length,10);
 const d=document.createElement('div');d.className='cl';
 d.innerHTML=`<div class="cn">${nmOf(id)}</div><div class="cs2">memanggil…</div><div class="cg">${[['🔊','Speaker',1],['▶','FaceTime'],['🎙','Mute'],['👤','Add']].map(x=>`<div><b class="${x[2]?'w':''}">${x[0]}</b>${x[1]}</div>`).join('').replace(/(<div><b class="">👤.*?<\/div>)/,'$1<div><button class="ce" data-end="1">☎</button>End</div>')}<div><b>⠿</b>Keypad</div></div>`;
 q('#ph').appendChild(d);q('#sb').classList.remove('dk');q('#hb').classList.remove('dk');tone(440,.4,.04);
 const end=ms=>_st(()=>{if(d.isConnected){d.remove();app&&page(1)}},ms);
 _st(()=>{if(!d.isConnected)return;const s=d.querySelector('.cs2');if(tx){s.textContent='"'+tx+'"';tone(520,.12,.04);if(lv>=3||(lv==2&&R()<.4))end(3800)}else{s.textContent='tidak dijawab…';end(2200)}},1800+R()*1800)};
/* ---- nomor spesial (keypad): tiap isi array = satu bubble ---- */
const IKLAN='langsung saja beli akun hanya di ryuiinite, cair cair';
const SPC={'112':['woi u bukan u es e napa nelpon kesini',IKLAN],
 '110':['woi ada ape, ni nu ni nu.',IKLAN,'siap berangkat'],
 '123':['mau beli pulsa lo?',IKLAN],
 '191005':['makasih ya udah stalking ulang tahunku']};
const _oc2=callTo;
callTo=function(n){const k=String(n).replace(/\D/g,''),L=SPC[k];if(!L||PE[n])return _oc2(n);
 closeKb();F['c'+k]=1;
 const d=document.createElement('div');d.className='cl';
 d.innerHTML=`<div class="cn">${k}</div><div class="cs2">memanggil…</div><div class="cg">${[['🔊','Speaker',1],['▶','FaceTime'],['🎙','Mute'],['👤','Add']].map(x=>`<div><b class="${x[2]?'w':''}">${x[0]}</b>${x[1]}</div>`).join('').replace(/(<div><b class="">👤.*?<\/div>)/,'$1<div><button class="ce" data-end="1">☎</button>End</div>')}<div><b>⠿</b>Keypad</div></div>`;
 q('#ph').appendChild(d);q('#sb').classList.remove('dk');q('#hb').classList.remove('dk');tone(440,.4,.04);
 const BB='background:rgba(255,255,255,.16);padding:9px 16px;border-radius:18px;margin:4px auto';
 L.forEach((t,i)=>_st(()=>{if(!d.isConnected)return;let e;
  if(i==0){e=d.querySelector('.cs2')}else{e=document.createElement('div');e.className='cs2';d.querySelector('.cg').before(e)}
  e.style.cssText=BB;e.textContent=t;tone(520,.12,.04)},2000+i*1800))};
/* ---- titik hijau (aktif) ---- */
const DOTH='<i class="igdot" style="width:9px;height:9px;right:-2px;bottom:0;border-width:2px"></i>',ONT={},FIXD=['shrain','rainyquee'];
SOC.set=(n,v)=>{v=v?1:0;if(FIXD.includes(n)||(SOC.on[n]?1:0)==v)return;SOC.on[n]=v;SOC.paint(n)};
SOC.act=(n,ms)=>{if(FIXD.includes(n))return;clearTimeout(ONT[n]);SOC.set(n,1);const off=()=>{if(SOC.busy==n){ONT[n]=_st(off,15e3);return}delete ONT[n];SOC.set(n,0)};ONT[n]=_st(off,ms)};
SOC.paint=n=>{if(app!='ig')return;const on=!!SOC.on[n];
 if(sv=='igd'){const b=q('.igrw[data-igc="'+n+'"]');if(!b)return;const av=b.querySelector('.igav'),d=av&&av.querySelector('.igdot');if(on&&av&&!d)av.insertAdjacentHTML('beforeend','<i class="igdot"></i>');else if(!on&&d)d.remove();
  if(!SOC.pv[n]){const sp=b.querySelector('span');if(sp)sp.textContent=on?'Active now':(SOC.sub[n]||'')}}
 else if(sv=='igc'&&X.IGN==n){const w=q('.igt .igdw'),d=w&&w.querySelector('.igdot');if(w){if(on&&!d)w.insertAdjacentHTML('beforeend',DOTH);else if(!on&&d)d.remove()}
  const sp=q('.igt .tt span');if(sp)sp.textContent=on?'Aktif sekarang':'Instagram'}};
const POOL=['jo.elmrt','dollkitty.xx','cunn.wijaya','mey','nadiaaa','dimas.futsal','rizky.ptr_','alvn_04','kopi.kampus'];
if(R()<.6)SOC.act(pick(POOL),40e3+R()*6e4);
(function lp(){_st(()=>{try{if(R()<.6){const n=pick(POOL.filter(x=>!SOC.on[x]));if(n)SOC.act(n,35e3+R()*95e3)}}catch(err){}lp()},12e3+R()*18e3)})();

/* ---- telepon & video call IG ---- */
const VG=['eh bentar, jangan lihat mukaku dulu wkwk','hah ini video call? aku kira telpon biasa','bentar, rambutku berantakan banget','kamu kelihatan jelas banget, sinyalnya bagus','suaraku kedengeran nggak? kameranya kebalik nih','kamu lagi di mana itu? kok agak gelap','lagi di kamar nih, jangan ketawa ya','kameraku burem ya? bentar kugeser','muka kamu ngantuk banget, belum tidur?','aku matiin kamera dikit ya, hemat kuota','halo? kelihatan nggak aku di situ?','bentar, aku cari cahaya yang lebih terang'];
const SHV=['rai?! tumben video call, bentar aku rapiin rambut dulu','hehe kamu kelihatan capek, udah makan belum?','bentar, kameraku kebalik, aku benerin dulu','lihat nih, kardus bukunya udah numpuk banyak','ayah lagi lewat di belakang, jangan ngomong keras ya','kamu lagi di kos? kok kamarmu rapi banget','aku cuma bisa video call bentar, abis ini lanjut beres-beres','jangan screenshot ya, mukaku lagi nggak siap','suaramu jelas, tapi gambarnya agak patah-patah','kapan-kapan kita video call lebih lama ya'];
const CP={};
Object.keys(PE).forEach(k=>{const P=PE[k];if(P.ig)CP[P.ig]={L:P.L,V:VG,A:P.A,tol:P.tol}});
CP.shrain.V=SHV;
CP['mey']={tol:0,V:VG,L:['halo kak rai? kaget banget kakak nelpon','eh iya kak, ada apa ya?','aduh kak, aku lagi di kelas, bentar ya','kak, suaranya kecil, bisa lebih keras?','hehe makasih ya kak udah nelpon','kak, aku masih bingung, kok tiba-tiba nelpon','bentar kak, aku keluar kelas dulu','iya kak, fotonya nanti kukirim ya','kak rai ternyata ramah ya','aduh sinyal aku putus-putus nih kak'],A:[['kak, tadi kan udah nelpon, ada apa ya?','kak, aku agak bingung nih kok nelpon lagi'],['kak, aku lagi sibuk, jangan nelpon terus dong','kak, mohon jangan spam telpon ya'],['kak, aku tutup ya, tolong jangan telpon lagi','maaf kak, aku nggak nyaman, aku matiin']]};
CP['jo.elmrt']={tol:1,V:VG,L:['woi rai! tumben nelpon, ada apa?','anjir lama banget nggak denger suara lu','bentar, gue di warkop, berisik banget','lu masih di Semarang nggak sekarang?','santai rai, gue lagi nyetir, ngomong cepet','wah tumben, lu butuh bantuan apa?','gue baru mau nanya kabar lu loh','hahaha suara lu masih sama aja','bentar, gue minggir dulu biar jelas','nanti kita ketemu aja deh, ngobrol langsung'],A:[['yaelah rai, baru aja nelpon','santai dong, gue lagi ada urusan'],['rai, serius deh lu ngapain nelpon terus','gue lagi sibuk, nanti gue kabarin'],['udah ya rai, gue matiin, jangan ganggu','lu spam banget, gue mute nih']]};
CP['dollkitty.xx']={tol:0,V:VG,L:['halo? ini siapa ya... oh rai!','eh kamu beneran nelpon, aku kira bercanda','hehe halo, lagi apa nih?','bentar ya aku kecilin musiknya dulu','kok tiba-tiba nelpon, ada yang penting?','aku lagi rebahan nih, ngantuk banget','suaramu beda dari yang kubayangin wkwk','bentar, kucing aku lompat ke laptop','follow back-nya udah kamu lakuin kan?','hihi aku salting, bentar'],A:[['eh, barusan udah nelpon deh','kenapa nelpon lagi? aku jadi bingung'],['aku lagi sibuk nih, jangan nelpon terus ya','kamu agak spam deh, aku risih'],['aku tutup ya, tolong jangan telpon lagi','udah cukup, aku matiin dan aku mute']]};
CP['cunn.wijaya']={tol:1,V:VG,L:['halo? ini beneran Rai yang main futsal?','oh iya halo, kebetulan banget kamu nelpon','bentar gue keluar dulu, lagi ada orang','jadi fotonya waktu turnamen kemarin ya?','gue Cunn, temennya Dimas, masih inget?','wah, suara lu lebih berat dari bayangan gue','nanti gue ikut futsal sabtu kalo ada slot','bentar, sinyal gue jelek di sini','lu main posisi apa biasanya?','ntar kita sparing bareng ya'],A:[['bro, baru aja nelpon, ada apaan?','lu nelpon lagi? ada yang ketinggalan?'],['bro, jangan spam telpon dong','gue lagi sibuk, stop ya'],['udah, gue matiin, jangan telpon lagi','lu ganggu banget, gue blok nih']]};
CP['kopi.kampus']={tol:0,V:['Maaf kak, kami belum melayani video call','Kak, untuk pesanan silakan lewat chat ya','Mohon maaf kak, kamera kami sedang tidak aktif','Kak, kami lagi sibuk melayani antrean','Maaf kak, lebih cepat kalau lewat DM','Kami tidak bisa video call ya kak, maaf','Mohon tunggu sebentar ya kak, kami cek dulu','Kak, bisa kirim pesanan lewat chat saja?','Terima kasih sudah menghubungi Kopi Kampus','Maaf kak, sinyal video kami kurang bagus'],L:['Halo, dengan Kopi Kampus, ada yang bisa kami bantu?','Selamat datang kak, mau pesan kopi susu?','Mohon tunggu sebentar ya kak, kami cek dulu','Kopi susunya sudah siap diambil kak','Maaf kak, kami lebih cepat dibalas lewat chat','Promo beli 2 gratis 1 masih berlaku hari ini','Untuk pesanan, kakak bisa kirim lewat DM ya','Kami buka sampai jam delapan malam kak','Maaf kak, suara kurang jelas, bisa diulang?','Terima kasih sudah menghubungi Kopi Kampus kak'],A:[['Kak, tadi sudah menelepon, ada tambahan pesanan?','Maaf kak, silakan tulis pesanan lewat chat saja'],['Kak, mohon jangan menelepon berulang kali ya','Kami sedang melayani pelanggan lain kak'],['Maaf kak, kami tutup telepon, silakan chat saja','Panggilan berulang kami anggap spam kak']]};
const BYE=['oke ya, aku tutup dulu','udah dulu ya, nanti lanjut','aku harus pergi nih, dadah','yaudah ya, sampai nanti'];
const fmt=x=>(x/60|0)+':'+String(x%60).padStart(2,'0');
(function(){const c=document.createElement('style');c.textContent=`.cl.igcl{background:#000;padding:0;gap:0;display:block;overflow:hidden}
.igcl .igbg{position:absolute;inset:-40px;filter:blur(30px) brightness(.45);transform:scale(1.2)}.igcl.vid .igbg{filter:blur(8px) brightness(.8)}
.igcl .igbg>*{width:100%!important;height:100%!important;border-radius:0!important}
.igcl .igtop{position:absolute;left:0;right:0;top:0;padding:74px 24px 0;text-align:center;z-index:2}
.cl.igcl .cn{font-size:26px;font-weight:700}.igcl .igst{font-size:16px;color:#fffc;margin-top:6px;text-shadow:0 1px 4px #0008}
.igcl .igav2{position:absolute;left:50%;top:230px;transform:translateX(-50%);z-index:2}.igcl.vid .igav2{display:none}
.igcl .igme{position:absolute;right:16px;top:110px;width:96px;height:140px;border-radius:16px;background:#1c1c1c;display:none;place-items:center;z-index:3;overflow:hidden;border:1px solid #fff3;font-size:12px;color:#fffb}
.igcl.vid .igme{display:grid}.igcl.nocam .igme{display:none}
.igcl .igcap{position:absolute;left:24px;right:24px;bottom:190px;margin:auto;width:fit-content;max-width:300px;background:#000a;border-radius:16px;padding:10px 14px;font-size:16px;line-height:1.3;opacity:0;transition:opacity .3s;z-index:2}.igcl .igcap.on{opacity:1}
.igcl .igcs{position:absolute;left:0;right:0;bottom:64px;display:flex;justify-content:center;gap:18px;z-index:3}
.igcl .igcb{width:62px;height:62px;border-radius:50%;background:#ffffff2b;display:grid;place-items:center;color:#fff;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.igcl .igcb.on{background:#fff;color:#111}
.igcl .igcb.end{background:#ff3b30;color:#fff}.igcl .igcb.end svg{transform:rotate(135deg)}`;document.head.appendChild(c)})();
function igCall(n,vid){
 if(q('#ph .cl'))return;
 if(n=='rainyquee'){typeof toast=='function'&&toast('You can’t call yourself');return}
 const P=CP[n]||CP.mey,now=Date.now(),H=(SOC.icalls[n]=(SOC.icalls[n]||[]).filter(t=>now-t<18e4));H.push(now);
 const lv=Math.min(3,H.length-1-P.tol),on=!!SOC.on[n];
 let pa=n=='shrain'?.97:on?.88:.28;if(lv>=3)pa*=.4;
 const ans=R()<pa,spam=lv>0&&ans,I=X.I;
 closeKb();SOC.busy=n;
 const ic={sp:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/>',cam:'<rect x="3" y="6" width="13" height="12" rx="3"/><path d="m16 11 5-3v8l-5-3"/>',mic:'<rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',flip:'<path d="M4 12a8 8 0 0 1 14-5l2 2M20 12a8 8 0 0 1-14 5l-2-2"/><path d="M20 4v5h-5M4 20v-5h5"/>',end:'<path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>'};
 const b=(k,t)=>`<button class="igcb${k=='end'?' end':''}" ${k=='end'?'data-end="1"':'data-igt="'+k+'"'} aria-label="${t}">${I(ic[k],28)}</button>`;
 const d=document.createElement('div');d.className='cl igcl'+(vid?' vid':'');
 d.innerHTML=`<div class="igbg">${X.IGP(0,560,0,n)}</div><div class="igtop"><div class="cn">${n}</div><div class="igst">${vid?'Memanggil video…':'Memanggil…'}</div></div><div class="igav2">${X.IGP(0,150,0,n)}</div><div class="igme">${X.IGP(0,56,0,'rainyquee')}<span>Kamu</span></div><div class="igcap"></div><div class="igcs">${vid?b('cam','Camera')+b('flip','Balik')+b('mic','Mikrofon'):b('sp','Speaker')+b('cam','Video')+b('mic','Mikrofon')}${b('end','Akhiri')}</div>`;
 q('#ph').appendChild(d);q('#sb').classList.remove('dk');q('#hb').classList.remove('dk');
 const st=d.querySelector('.igst'),cap=d.querySelector('.igcap');let conn=0,secs=0,done=0,rej=0,iv;
 const say=t=>{if(!d.isConnected||done)return;cap.textContent=t;cap.classList.add('on');tone(520,.12,.04)};
 const fin=()=>{if(done)return;done=1;clearInterval(iv);if(SOC.busy==n)SOC.busy=null;
  const w='Panggilan '+(vid?'video':'suara'),txt=conn?w+' · '+fmt(secs):w+(rej?' ditolak':' tak terjawab');
  SOC.thread(n).push(['sp',txt]);SOC.pv[n]=txt;SOC.ts[n]=Date.now();SOC.un[n]=0;if(d.isConnected)d.remove();
  if(app=='ig'&&(sv=='igd'||(sv=='igc'&&X.IGN==n)))page(1);
  if(!conn&&rej)_st(()=>push(n,pk(n+'rj',P.A[2])),1800+R()*1500)};
 d.addEventListener('click',e=>{e.stopPropagation();if(e.target.closest('[data-end]')){fin();return}const t=e.target.closest('[data-igt]');if(!t)return;t.classList.toggle('on');if(t.dataset.igt=='cam'&&vid)d.classList.toggle('nocam');tone(900,.03,.02)});
 iv=setInterval(()=>{if(!d.isConnected){fin();return}if(conn)st.textContent=fmt(++secs)},1000);
 const ring=()=>{if(d.isConnected&&!conn&&!done){tone(440,.35,.03);_st(ring,1600)}};ring();
 _st(()=>{if(!d.isConnected||done)return;
  if(!ans){rej=lv>=2?1:0;st.textContent=rej?'Panggilan ditolak':'Tidak dijawab…';tone(300,.2,.04);_st(fin,2000);return}
  conn=1;SOC.act(n,7e4+R()*6e4);st.textContent='0:00';tone(660,.1,.04);
  const L=spam?P.A[lv-1].slice():[pk(n+'c'+(vid?'v':'a'),vid?P.V:P.L),pk(n+'c'+(vid?'v':'a'),vid?P.V:P.L),pk(n+'c'+(vid?'v':'a'),vid?P.V:P.L)],gap=spam?3200:7e3;
  L.forEach((t,i)=>_st(()=>say(t),900+i*gap));
  if(!spam)_st(()=>say(pick(BYE)),900+L.length*gap);
  _st(fin,900+L.length*gap+(spam?900:2400))},2000+R()*2500)}

})();
