import"../chunk-f1e62a083f56e81c.js";var N=(j=!1,k=0,w=0.2)=>({initial:"inactive",animate:j?"active":"inactive",variants:{inactive:{opacity:0},active:{opacity:1,transition:{delay:k,staggerChildren:w}}}}),P=(j=0,k=0.2)=>({initial:"inactive",whileInView:"active",variants:{inactive:{opacity:0},active:{opacity:1,transition:{delay:j,staggerChildren:k}}}}),z={type:"spring",damping:25},J={type:"spring",stiffness:500},Q={variants:{inactive:{y:50,opacity:0},active:{y:0,opacity:1,transition:z}}},R={variants:{inactive:{x:50,opacity:0},active:{x:0,opacity:1,transition:z}}},U={variants:{inactive:{x:-50,opacity:0},active:{x:0,opacity:1,transition:z}}},V={variants:{inactive:{scale:0,opacity:0},active:{scale:1,opacity:1,transition:z}}},W={variants:{inactive:{scale:0,opacity:0},active:{scale:1,opacity:1,transition:J}}},K={type:"spring",stiffness:500,damping:30},L={type:"spring",damping:20,stiffness:90},M={type:"spring",damping:10,stiffness:200},G={default:K,elegant:L,bouncy:M},H={x:{duration:0}},Y=(j,k,w,F)=>{let q={};if(F)q={x:w};return{initial:"inactive",animate:k?"active":"inactive",variants:{inactive:{...q,opacity:0.5,scale:0.5},active:{...q,opacity:1,scale:1}},transition:{...G[j],...H}}},Z=(j,k,w,F)=>{let q={};if(F)q={x:w};return{initial:"inactive",animate:k?"active":"inactive",variants:{inactive:{...q,scale:0.85,opacity:1},active:{...q,scale:1,opacity:1}},transition:{...G[j],...H}}},_={contentBlock:{},preContent:{},preHeading:{},info:{},headingTitle:{},subHeading:{},description:{},primaryCta:{},secondaryCta:{}};export{W as springIn,V as scaleIn,Q as fadeInUp,U as fadeInRight,R as fadeInLeft,_ as emptyContentBlockAnim,Y as carouselFocusAnimation,Z as carouselBookcaseAnimation,L as carouselAnimationElegant,K as carouselAnimationDefault,M as carouselAnimationBouncy,P as animControllerInView,N as animController};
export{K as a,L as b,M as c,Y as d,Z as e,_ as f};