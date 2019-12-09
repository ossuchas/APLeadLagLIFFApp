import { Component, OnInit } from '@angular/core';
import { LiffappService, CrmProduct } from '../shared';
import { MatSnackBar } from '@angular/material';


declare var liff: any;

@Component({
  selector: 'app-leadlag',
  templateUrl: './leadlag.component.html',
  styleUrls: ['./leadlag.component.scss']
})
export class LeadlagComponent implements OnInit {
  messages: string;
  userProfile: any;
  selected: string;

  favoriteSeason: string;
  seasons: string[] = ['Year to Date', 'Quarter (Current Quarter)', 'Week (last week and current week)'];

  products: CrmProduct[] = [
    // {ProductID: '10135', Project: '10135: Centro รามอินทรา 109'},
    // {ProductID: '10210', Project: '10210: Centro ชัยพฤกษ์ - แจ้งวัฒนะ '},
    // {ProductID: '20009', Project: '20009: The City ราชพฤกษ์ - สวนผัก'},
    // {ProductID: '40050', Project: '40050: Centro สะพานมหาเจษฎาบดินทร์ฯ'},
    // {ProductID: '10200', Project: '10200: Centro รังสิต'},
    // {ProductID: '40025', Project: '40025: Centro รังสิต คลอง4 - วงแหวน'},
    {ProductID: '10059', Project: '10059: Aspire รัตนาธิเบศร์'},
{ProductID: '10060', Project: '10060: The Centro รัตนาธิเบศร์'},
{ProductID: '10077', Project: '10077: The Centro วัชรพล'},
{ProductID: '10087', Project: '10087: RHYTHM สาทร'},
{ProductID: '10091', Project: '10091: The Pleno พระราม 5-ปิ่นเกล้า'},
{ProductID: '10096', Project: '10096: Aspire งามวงศ์วาน'},
{ProductID: '10100', Project: '10100: The City ราชพฤกษ์-จรัญสนิทวงศ์ 13'},
{ProductID: '10118', Project: '10118: บ้านกลางเมือง นวมินทร์ 42'},
{ProductID: '10122', Project: '10122: บ้านกลางเมือง กัลปพฤกษ์'},
{ProductID: '10123', Project: '10123: บ้านกลางเมือง พระราม 9'},
{ProductID: '10128', Project: '10128: บ้านกลางเมือง เกษตร-นวมินทร์'},
{ProductID: '10132', Project: '10132: Aspire สาทร-ตากสิน (คอปเปอร์โซน)'},
{ProductID: '10135', Project: '10135: Centro รามอินทรา 109 '},
{ProductID: '10136', Project: '10136: บ้านกลางเมือง รัตนาธิเบศร์'},
{ProductID: '10137', Project: '10137: บ้านกลางเมือง พระราม 2-พุทธบูชา'},
{ProductID: '10139', Project: '10139: บ้านกลางเมือง งามวงศ์วาน'},
{ProductID: '10140', Project: '10140: Pleno พหลโยธิน - สายไหม'},
{ProductID: '10142', Project: '10142: SOUL ลาดพร้าว - เสนา'},
{ProductID: '10143', Project: '10143: The City รามอินทรา'},
{ProductID: '10145', Project: '10145: SOUL รัชดาภิเษก 68'},
{ProductID: '10149', Project: '10149: The Palazzo จรัญสนิทวงศ์ - ราชพฤกษ์'},
{ProductID: '10150', Project: '10150: Mind ติวานนท์'},
{ProductID: '10151', Project: '10151: Pleno ติวานนท์-แจ้งวัฒนะ'},
{ProductID: '10153', Project: '10153: บ้านกลางเมือง สุขุมวิท 77'},
{ProductID: '10154', Project: '10154: บ้านกลางเมือง THE EDITION  พระราม 9 – อ่อนนุช '},
{ProductID: '10156', Project: '10156: Pleno ปิ่นเกล้า-วงแหวน'},
{ProductID: '10159', Project: '10159: บ้านกลางเมือง วิภาวดี'},
{ProductID: '10161', Project: '10161: บ้านกลางเมือง สุขสวัสดิ์'},
{ProductID: '10163', Project: '10163: Mind พระราม 2 - สาทร'},
{ProductID: '10164', Project: '10164: The City สุขุมวิท-บางนา'},
{ProductID: '10165', Project: '10165: The City สาทร-ราชพฤกษ์'},
{ProductID: '10166', Project: '10166: The City สุขสวัสดิ์'},
{ProductID: '10168', Project: '10168: Mind ปิ่นเกล้า-จรัญฯ'},
{ProductID: '10169', Project: '10169: บ้านกลางเมือง พระราม 2 '},
{ProductID: '10171', Project: '10171: บ้านกลางเมือง พหลโยธิน 50 '},
{ProductID: '10172', Project: '10172: Pleno สุขสวัสดิ์ 66'},
{ProductID: '10173', Project: '10173: The City พัฒนาการ'},
{ProductID: '10174', Project: '10174: The City นวมินทร์ '},
{ProductID: '10175', Project: '10175: Pleno ราชพฤกษ์-พระราม 5'},
{ProductID: '10176', Project: '10176: Centro ปิ่นเกล้า - วงแหวน'},
{ProductID: '10177', Project: '10177: บ้านกลางเมือง สวนหลวง'},
{ProductID: '10178', Project: '10178: Grande Pleno รัตนาธิเบศร์ '},
{ProductID: '10179', Project: '10179: Pleno สุขสวัสดิ์-พระราม3'},
{ProductID: '10180', Project: '10180: Grande Pleno สุขสวัสดิ์'},
{ProductID: '10181', Project: '10181: District เอกมัย-รามอินทรา'},
{ProductID: '10183', Project: '10183: Centro ศรีนครินทร์-บางนา'},
{ProductID: '10185', Project: '10185: The City พหลโยธิน'},
{ProductID: '10186', Project: '10186: Grande Pleno ท่าน้ำนนท์'},
{ProductID: '10187', Project: '10187: The City ราชพฤกษ์'},
{ProductID: '10190', Project: '10190: Centro สุขสวัสดิ์ - พระราม 3'},
{ProductID: '10191', Project: '10191: Centro Westgate'},
{ProductID: '10192', Project: '10192: The City ปิ่นเกล้า - สาย 4'},
{ProductID: '10193', Project: '10193: Centro ราชพฤกษ์'},
{ProductID: '10194', Project: '10194: บ้านกลางเมือง CLASSE  เอกมัย-รามอินทรา'},
{ProductID: '10196', Project: '10196: Pleno พหลโยธิน'},
{ProductID: '10197', Project: '10197: บ้านกลางเมืองปิ่นเกล้า – จรัญฯ'},
{ProductID: '10199', Project: '10199: Pleno สุขสวัสดิ์'},
{ProductID: '10200', Project: '10200: Centro รังสิต'},
{ProductID: '10201', Project: '10201: The City รัตนาธิเบศร์ – บางใหญ่'},
{ProductID: '10203', Project: '10203: The Palazzo ศรีนครินทร์'},
{ProductID: '10205', Project: '10205: Pleno ราชพฤกษ์'},
{ProductID: '10206', Project: '10206: Pleno บางใหญ่'},
{ProductID: '10207', Project: '10207: Centro พระราม9-มอเตอร์เวย์'},
{ProductID: '10208', Project: '10208: Pleno พหลโยธิน - วัชรพล'},
{ProductID: '10209', Project: '10209: Pleno ชัยพฤกษ์-แจ้งวัฒนะ'},
{ProductID: '10210', Project: '10210: Centro ชัยพฤกษ์-แจ้งวัฒนะ'},
{ProductID: '10212', Project: '10212: The City สาทร-สุขสวัสดิ์'},
{ProductID: '10213', Project: '10213: บ้านกลางเมือง สาทร-สุขสวัสดิ์ '},
{ProductID: '10214', Project: '10214: บ้านกลางเมือง ลาดพร้าว-เสรีไทย '},
{ProductID: '10216', Project: '10216: The City ปิ่นเกล้า-บรมฯ'},
{ProductID: '20005', Project: '20005: Pleno เพชรเกษม 112'},
{ProductID: '20006', Project: '20006: The City บางนา กม.7'},
{ProductID: '20007', Project: '20007: บ้านกลางเมือง ราชพฤกษ์-พระราม 5'},
{ProductID: '20008', Project: '20008: Centro รามอินทรา-จตุโชติ'},
{ProductID: '20009', Project: '20009: The City ราชพฤกษ์-สวนผัก'},
{ProductID: '20010', Project: '20010: บ้านกลางเมือง รามอินทรา-วัชรพล'},
{ProductID: '20011', Project: '20011: Pleno รามอินทรา-วงแหวน'},
{ProductID: '20012', Project: '20012: บ้านกลางเมือง The Edition พระราม9-กรุงเทพกรีฑา'},
{ProductID: '20016', Project: '20016: Pleno พระราม 9 – กรุงเทพกรีฑา'},
{ProductID: '20017', Project: '20017: บ้านกลางเมือง พระราม9-กรุงเทพกรีฑา'},
{ProductID: '20018', Project: '20018: บ้านกลางเมือง รามอินทรา'},
{ProductID: '40008', Project: '40008: Pleno ศรีนครินทร์'},
{ProductID: '40011', Project: '40011: Aspire ลาดพร้าว 113 '},
{ProductID: '40013', Project: '40013: District ลาดพร้าว (เฟส1)'},
{ProductID: '40016', Project: '40016: Mind พระราม 2 (TH)'},
{ProductID: '40017', Project: '40017: Aspire เอราวัณ (ทาวเวอร์ บี)'},
{ProductID: '40018', Project: '40018: Aspire เอราวัณ (Tower A)'},
{ProductID: '40021', Project: '40021: Centro พหลฯ-วิภาวดี'},
{ProductID: '40022', Project: '40022: Centro อ่อนนุช -สุวรรณภูมิ'},
{ProductID: '40023', Project: '40023: Centro ราชพฤกษ์-สวนผัก'},
{ProductID: '40024', Project: '40024: Centro บางนา กม.7'},
{ProductID: '40025', Project: '40025: Centro รังสิต คลอง 4-วงแหวน'},
{ProductID: '40026', Project: '40026: Pleno ปิ่นเกล้า – จรัญฯ'},
{ProductID: '40027', Project: '40027: The City รัชดาฯ - วงศ์สว่าง'},
{ProductID: '40028', Project: '40028: Pleno บางนา – อ่อนนุช'},
{ProductID: '40029', Project: '40029: บ้านกลางเมือง THE EDITION พระราม9 - พัฒนาการ'},
{ProductID: '40030', Project: '40030: Centro ชัยพฤกษ์ –แจ้งวัฒนะ 2'},
{ProductID: '40031', Project: '40031: The City ราชพฤกษ์ - ปิ่นเกล้า'},
{ProductID: '40032', Project: '40032: Centro ราชพฤกษ์ -แจ้งวัฒนะ'},
{ProductID: '40033', Project: '40033: Pleno ราชพฤกษ์-รัตนาธิเบศร์'},
{ProductID: '40034', Project: '40034: บ้านกลางเมือง วัชรพล'},
{ProductID: '40035', Project: '40035: Centro บางใหญ่'},
{ProductID: '40036', Project: '40036: GRANDE PLENO สุขสวัสดิ์-พระราม 3'},
{ProductID: '40037', Project: '40037: บ้านกลางเมือง ราชพฤกษ์'},
{ProductID: '40039', Project: '40039: Centro พระราม 2-พุทธบูชา'},
{ProductID: '40040', Project: '40040: Centro ราชพฤกษ์ 2'},
{ProductID: '40041', Project: '40041: บ้านกลางเมือง The Era ปิ่นเกล้า-จรัญฯ'},
{ProductID: '40042', Project: '40042: Pleno รามอินทรา'},
{ProductID: '40043', Project: '40043: Pleno ชัยพฤกษ์'},
{ProductID: '40044', Project: '40044: Centro บางนา – กิ่งแก้ว'},
{ProductID: '40045', Project: '40045: The City สะพานมหาเจษฎาบดินทร์ฯ'},
{ProductID: '40046', Project: '40046: Pleno สุขสวัสดิ์ 70'},
{ProductID: '40047', Project: '40047: บ้านกลางเมือง The Edition สุขสวัสดิ์ – พระราม 3'},
{ProductID: '40050', Project: '40050: Centro สะพานมหาเจษฎาบดินทร์ฯ'},
{ProductID: '40052', Project: '40052: Aspire อโศก-รัชดา'},
{ProductID: '40054', Project: '40054: GRANDE PLENO พหลโยธิน-รังสิต'},
{ProductID: '40055', Project: '40055: Centro ไทรม้า 2'},
{ProductID: '60002', Project: '60002: Vittorio'},
{ProductID: '60004', Project: '60004: Aspire รัชดา-วงศ์สว่าง'},
{ProductID: '60007', Project: '60007: RHYTHM เอกมัย'},
{ProductID: '60008', Project: '60008: Life อโศก'},
{ProductID: '60010', Project: '60010: Life Ladprao'},
{ProductID: '60012', Project: '60012: Rhythm รางน้ำ'},
{ProductID: '60013', Project: '60013: Life ปิ่นเกล้า'},
{ProductID: '60014', Project: '60014: บ้านกลางเมือง พระราม9-อ่อนนุช'},
{ProductID: '60015', Project: '60015: Life ๑ Wireless'},
{ProductID: '60016', Project: '60016: Life อโศก - พระราม 9'},
{ProductID: '60018', Project: '60018: Life Sukhumvit 62'},
{ProductID: '60019', Project: '60019: Life Ladprao Valley'},
{ProductID: '60020', Project: '60020: Life สาทร เซียร์รา'},
{ProductID: '60021', Project: '60021: ASPIRE Sukhumvit-Onnut '},
{ProductID: '60022', Project: '60022: Life Asoke-Hype'},
{ProductID: '60023', Project: '60023: The Address สยาม-ราชเทวี'},
{ProductID: '60024', Project: '60024: บ้านกลางเมือง The Edition บางนา-วงแหวน'},
{ProductID: '60025', Project: '60025: Aspire สาทร-ราชพฤกษ์'},
{ProductID: '60026', Project: '60026: บ้านกลางเมือง The Edition บางนา-วงแหวน (Business District)'},
{ProductID: '60027', Project: '60027: บ้านกลางเมือง บางนา-วงแหวน'},
{ProductID: '60028', Project: '60028: Pleno บางนา – วงแหวน'},
{ProductID: '60029', Project: '60029: RHYTHM เอกมัย Estate'},
{ProductID: '60031', Project: '60031: Rhythm Charoenkrung Pavillion'},
{ProductID: '70002', Project: '70002: Aspire รัตนาธิเบศร์ 2'},
{ProductID: '70009', Project: '70009: Aspire รัตนาธิเบศร์ Phase C'},
{ProductID: '70012', Project: '70012: The Pleno รัตนาธิเบศร์-ชัยพฤกษ์'},
{ProductID: '70013', Project: '70013: Aspire อุดรธานี'},
{ProductID: '70014', Project: '70014: COO พิษณุโลก'},
{ProductID: '70015', Project: '70015: บ้านกลางเมือง รัชดา-วงศ์สว่าง'},
{ProductID: '70017', Project: '70017: District ลาดพร้าว (เฟส2)'},
{ProductID: '70018', Project: '70018: Mind พระราม 7 (TH)'},
{ProductID: '70019', Project: '70019: Pleno สุขุมวิท – บางนา'},
{ProductID: '70020', Project: '70020: Pleno พหลโยธิน รังสิต'},
{ProductID: '70022', Project: '70022: Pleno รังสิต คลอง 4-วงแหวน'},
{ProductID: '70024', Project: '70024: บ้านกลางเมือง ราชพฤกษ์ – รัตนาธิเบศร์ '},
{ProductID: '70025', Project: '70025: Pleno พหลโยธิน-วัชรพล 2'},
{ProductID: '70026', Project: '70026: The City เอกมัย - ลาดพร้าว'},
{ProductID: '70027', Project: '70027: Pleno ดอนเมือง-สรงประภา'},
{ProductID: '70028', Project: '70028: Pleno ชัยพฤกษ์-แจ้งวัฒนะ 2'},
{ProductID: '70029', Project: '70029: Pleno เวสต์เกต'},
{ProductID: '70030', Project: '70030: Grande Pleno ราชพฤกษ์'},
{ProductID: '70033', Project: '70033: The City พระราม 9 – กรุงเทพกรีฑา'},
{ProductID: '70034', Project: '70034: Grande Pleno วัชรพล-สุขาภิบาล 5'},
{ProductID: '70035', Project: '70035: Pleno ลาดพร้าว-เสรีไทย'},
{ProductID: '70036', Project: '70036: THE SONNE ศรีนครินทร์ – บางนา'},
{ProductID: '70037', Project: '70037: บ้านกลางเมือง THE EDITION สาทร-สุขสวัสดิ์'},
{ProductID: '70038', Project: '70038: Centro วงแหวน - จตุโชติ'},
{ProductID: '70039', Project: '70039: Centro บางนา-วงแหวน  '},
{ProductID: '70041', Project: '70041: Pleno บางใหญ่ 2'},
{ProductID: '70043', Project: '70043: The City สุขสวัสดิ์ 64'},
{ProductID: '70045', Project: '70045: Pleno สาทร-สุขสวัสดิ์'},
{ProductID: '70046', Project: '70046: Pleno รามอินทรา 109 (ซ.พระยาสุเรนทร์ 11)'},
{ProductID: '70047', Project: '70047: Pleno ราชพฤกษ์-แจ้งวัฒนะ'},
{ProductID: '70053', Project: '70053: บ้านกลางเมือง ราชพฤกษ์_The Walk'},
{ProductID: '70054', Project: '70054: Pleno สุขสวัสดิ์ 30-8'},
  ];

  constructor(
    private liffService: LiffappService,
    private snackBar: MatSnackBar
    ) {
    this.messages = '';
    this.selected = '';
    this.favoriteSeason = '';
    this.initLineLiff();
  }

  async ngOnInit() {
    this.messages = '';
    this.selected = '';
    this.favoriteSeason = '';
    await this.initLineLiff();
  }

  async initLineLiff() {
    try {
      const data: any = await this.liffService.initLineLiff();
      this.userProfile = await liff.getProfile();
      console.log(`Hi ${this.userProfile.displayName}!`);
    } catch (err) {
      console.log(err);
    }
  }

  async sendMessages() {
    console.log(this.favoriteSeason);
    if (this.selected === '') {
      console.log('Empthy Project');
      this.snackBar.open('Please Select Project looking for data...!!', '', {
        duration: 3000
      });
    } else {
      console.log(this.selected);
      this.messages = 'proj: ' + this.selected + ', peroid: ' + this.favoriteSeason;
      try {
        const successMsgs = await liff.sendMessages([{
          type: 'text',
          text: this.messages
        }
      ]);
      liff.closeWindow();
    } catch (e) {
      // alert(e);
    }
    }
  }
}
