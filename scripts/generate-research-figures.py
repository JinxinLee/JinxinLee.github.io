"""Recreate lightweight, source-labeled research SVGs using the standard library."""
from pathlib import Path
from html import escape

OUT = Path(__file__).resolve().parents[1] / 'assets' / 'research'
OUT.mkdir(parents=True, exist_ok=True)
TEAL, GRAY = '#145b56', '#607a72'
def text(x, y, s, size=20, anchor='start', color='#243b35'):
    return f'<text x="{x}" y="{y}" font-size="{size}" text-anchor="{anchor}" fill="{color}">{escape(s)}</text>'
def line(x1,y1,x2,y2,color=GRAY,extra=''):
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="2" {extra}/>'
def circle(x,y,r=6,color=TEAL):
    return f'<circle cx="{x}" cy="{y}" r="{r}" fill="{color}"/>'
def box(x,y,w,h,label,sub=''):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="12" fill="#edf5f1" stroke="#bdd2c8"/>'+text(x+w/2,y+30,label,21,'middle')+text(x+w/2,y+56,sub,17,'middle')
def save(name,title,body):
    (OUT/name).write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 420" role="img" aria-labelledby="title"><title id="title">{escape(title)}</title><rect width="760" height="420" fill="white"/><g font-family="Arial, sans-serif">{body}</g></svg>',encoding='utf-8')

b=text(28,38,'PANDA: an extended interaction region',25)
b+=text(28,70,'Conceptual schematic · not to scale',18)
b+='<rect x="185" y="155" width="510" height="110" rx="35" fill="#edf5f1"/>'
b+=line(35,210,715,210,TEAL)+text(30,135,'Antiproton beam',20)
b+='<path d="M705 203 L719 210 L705 217" fill="none" stroke="#145b56" stroke-width="3"/>'
b+='<rect x="260" y="135" width="12" height="150" fill="#145b56"/>'
for x in [266,420,565]:
    b+=circle(x,210)+line(x,210,x+45,120)+line(x,210,x+65,300)
b+=text(266,330,'Nominal target',20,'middle')+text(532,330,'Residual-gas interactions',20,'middle')
b+=text(28,382,'Interaction position → acceptance and reconstruction efficiency',21)
save('interaction-context.svg','Extended target and residual-gas interaction schematic',b)

b=text(28,38,'Luminosity closure in simulation',25)
left,right=270,690
def xp(v): return left+(v+.15)/.3*(right-left)
for v in [-.1,0,.1]:
    b+=line(xp(v),90,xp(v),320,'#d8e4df', 'stroke-dasharray="5 5"' if v==0 else '')+text(xp(v),350,f'{v:.2f}',19,'middle')
for label,val,err,y in [('Point-like target',-.04,.07,130),('Known target profile',.02,.08,210),('Reconstructed profile',.05,.07,290)]:
    b+=text(24,y+6,label,19)+line(xp(val-err),y,xp(val+err),y,TEAL)+line(xp(val-err),y-7,xp(val-err),y+7,TEAL)+line(xp(val+err),y-7,xp(val+err),y+7,TEAL)+circle(xp(val),y)
    b+=text(xp(val),y-18,f'{val:.2f} ± {err:.2f}',18,'middle')
b+=text(480,391,'Relative luminosity deviation (%)',20,'middle')
save('luminosity-closure.svg','Relative luminosity deviations from thesis Table 9.2',b)

b=text(28,38,'From tracks to a corrected target profile',25)
nodes=[(30,80,'Track finding & fit','Existing Apollonius / GenFit'),(400,80,'POCA vertex estimate','POCA-First workflow'),(400,210,'Back-propagation','Corrections + vertex fitting'),(30,210,'Profile reconstruction','Efficiency + migration correction')]
for x,y,title,sub in nodes:b+=box(x,y,330,80,title,sub)
b+=line(365,120,395,120,TEAL)+text(380,110,'→',25,'middle')
b+=line(565,165,565,205,TEAL)+text(580,192,'↓',25)
b+=line(365,250,395,250,TEAL)+text(380,240,'←',25,'middle')
b+='<path d="M195 295 L195 330 L565 330 L565 295" fill="none" stroke="#145b56" stroke-width="2" stroke-dasharray="6 4"/>'
b+=text(380,362,'Iterate the assumed profile and efficiency map',20,'middle')
b+=text(380,398,'Then integrate the determined profile into luminosity fitting',18,'middle')
save('reconstruction-workflow.svg','Track and profile reconstruction workflow',b)

b=text(28,38,'Iterative target-profile correction',25)+text(28,70,'Global discrepancy (%) · tabulated uncertainties',19)
def yp(v):return 326-v*12
for v in [0,5,10,15,20]:b+=line(100,yp(v),700,yp(v),'#d8e4df')+text(80,yp(v)+6,str(v),19,'end')
pts=[]
for i,(val,err) in enumerate([(12.27,5.69),(4.28,1.19),(1.30,1.32)]):
    x=180+i*220;y=yp(val);pts.append(f'{x},{y}')
    b+=line(x,yp(val-err),x,yp(val+err),TEAL)+line(x-9,yp(val-err),x+9,yp(val-err),TEAL)+line(x-9,yp(val+err),x+9,yp(val+err),TEAL)+circle(x,y)
    b+=text(x,y-20,f'{val:.2f}',21,'middle')+text(x,365,str(i+1),20,'middle')
b+='<polyline points="'+' '.join(pts)+'" fill="none" stroke="#145b56" stroke-width="2"/>'
b+=text(400,402,'Correction iteration',21,'middle')
save('iterative-correction.svg','Global discrepancy at three correction iterations, Table 9.1',b)

b=text(28,38,'Primary-vertex spatial resolution',25)+text(28,70,'Resolution width (μm) · smaller is better',19)
b+='<rect x="430" y="55" width="18" height="18" fill="#607a72"/>'+text(457,70,'Hybrid pixel',17)+'<rect x="580" y="55" width="18" height="18" fill="#145b56"/>'+text(607,70,'HV-MAPS',17)
def xx(v):return 140+v*1.45
for v in [0,100,200,300,400]:b+=line(xx(v),100,xx(v),335,'#d8e4df')+text(xx(v),365,str(v),18,'middle')
for axis,vals,errs,y in [('x',(60,29),(2,1),140),('y',(55,31),(2,1),220),('z',(345,187),(13,4),300)]:
    b+=text(50,y+10,axis,24)
    for j,(v,e,c) in enumerate(zip(vals,errs,[GRAY,TEAL])):
        yy=y-16+j*28
        b+=f'<rect x="140" y="{yy-8}" width="{v*1.45}" height="16" fill="{c}"/>'+line(xx(v-e),yy,xx(v+e),yy,'#243b35')+line(xx(v+e),yy-6,xx(v+e),yy+6,'#243b35')+text(xx(v+e)+8,yy+6,str(v),18)
b+=text(430,401,'Width (μm) · dissertation Table 6.6',20,'middle')
save('hvmaps-comparison.svg','Hybrid-pixel and HV-MAPS primary-vertex resolution comparison',b)
print('Generated five research figures.')
