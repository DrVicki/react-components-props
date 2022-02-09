//here is a boilerplate component structure
import React, { Component } from 'react';


class Student extends Component {

    constructor(props) {
        super(props);
    }
    this.state = { 
        //students array
        students: [{
            name: 'Vicki Bealman',
            img: 'https://images.search.yahoo.com/yhs/search;_ylt=AwrC3PGWygNiaT8AyRQPxQt.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=vicki+bealman+images&type=asbw_8923_CHW_US_tid20073&param1=gywC8qI0c78SsMoaWrosg1sEByBupFM7r4xogojgMQffiPa%2B%2BJHh1VNFUrSg%2BFVu&param2=9dUI1n2R0BLDxNuWfiP4aWyjOZc2NBa%2Bx2opBYQCDMSB7nBAfwbAzkkglZNKi5o21u72Jm8TatlnU7NDGbP7F8Lft0aXvravgWuUt1wLTDRGoZDy1s38eFH2mqhQf7J35YCbQdFh0U0Q40PE25%2BEeG%2Bt%2By660cfFWnTypqgOdcDjrQOcdIhh%2BgPSFPZWJGUiWYUZ6k%2BPDsRD5ZB1Jd%2FrvFaF5j%2BQJMzGoRJFYAx1vqBMwLh%2FoaVyFYzs7y7MXAxX5gy55Q21PEItOuSLEcAQKm%2F5vsaOu7EprdVdWmQiyVHsa7XJx%2FeeZSTXhnWA1X3f98ac6dE8PJVFMXc5GGWFXA%3D%3D&param3=NwVEMR%2FzKcG52XsVBYEh2zk2Yklq85vdfspZPoqz2M1qypHRDDTed5vIiOf0QJloIYNIhURx5ygk43IbuWBmnfLApzQNuNyJQuCIFEosygzUObTBvpAdBKtFCFkedGtzXg8BZPONEY8XN9MMyOktFwFHXfEfmP1LXCvenblqvf6AAeNJnbRH4rpVRqJjTPGNrTl3qfq1Rd45TXxt1hkCJY0%2Bw8ou0BcrBwNfOqQDZ6ngRSgW0cPsNgPB3mtZPUHGBn5YtXTe6u5J4F0mUUU3YNxy3SQONGt3vcRtNqoa%2B1mxaJT%2Fne4BmqijOQeAFUdlMAxrBe4sJOr6jahJWdVTlj%2Bhl1i6PLM2aQrOa3lNLSJZoQIlOUZwya8bATquGOzl&param4=iJzGF8UG5IXW5q6S3PN%2FbUqqPKvGFFa8mh6rSorTYZI%3D&hsimp=yhs-syn&hspart=iba&ei=UTF-8&fr=yhs-iba-syn&th=105&tw=80.2&imgurl=https%3A%2F%2Fwww.dev-vicki.com%2Fimages%2Fdevvicki.png&rurl=https%3A%2F%2Fwww.dev-vicki.com%2F&size=148KB&name=DevVicki+Portfolio+Website&oid=1&h=356&w=272&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.X4soF6pRfKwadTTmwR4Q7QAAAA%26pid%3DApi%26rs%3D1%26c%3D1%26qlt%3D95%26w%3D80%26h%3D105&tt=DevVicki+Portfolio+Website&sigr=zSZz52sUbNnW&sigit=TGChNONclZIL&sigi=lllvIceRF8sI&sign=oTu7NT1OuOvc&sigt=oTu7NT1OuOvc'
        },
        {
            name: 'Mr. Rogers',
            img: 'https://images.search.yahoo.com/images/view;_ylt=AwrExdwnywNiojUAQRw2nIlQ;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzE5YzhiODEzZWE4Yjg4NTVjNjRjNWRiZDg4MmI4MzcxBGdwb3MDMgRpdANiaW5n?back=https%3A%2F%2Fimages.search.yahoo.com%2Fyhs%2Fsearch%3Fp%3Dsteve%2Bjobs%2Bimages%26ei%3DUTF-8%26type%3Dasbw_8923_CHW_US_tid20073%26fr%3Dyhs-iba-syn%26hsimp%3Dyhs-syn%26hspart%3Diba%26param1%3DgywC8qI0c78SsMoaWrosg1sEByBupFM7r4xogojgMQffiPa%252B%252BJHh1VNFUrSg%252BFVu%26param2%3D9dUI1n2R0BLDxNuWfiP4aWyjOZc2NBa%252Bx2opBYQCDMSB7nBAfwbAzkkglZNKi5o21u72Jm8TatlnU7NDGbP7F8Lft0aXvravgWuUt1wLTDRGoZDy1s38eFH2mqhQf7J35YCbQdFh0U0Q40PE25%252BEeG%252Bt%252By660cfFWnTypqgOdcDjrQOcdIhh%252BgPSFPZWJGUiWYUZ6k%252BPDsRD5ZB1Jd%252FrvFaF5j%252BQJMzGoRJFYAx1vqBMwLh%252FoaVyFYzs7y7MXAxX5gy55Q21PEItOuSLEcAQKm%252F5vsaOu7EprdVdWmQiyVHsa7XJx%252FeeZSTXhnWA1X3f98ac6dE8PJVFMXc5GGWFXA%253D%253D%26param3%3DNwVEMR%252FzKcG52XsVBYEh2zk2Yklq85vdfspZPoqz2M1qypHRDDTed5vIiOf0QJloIYNIhURx5ygk43IbuWBmnfLApzQNuNyJQuCIFEosygzUObTBvpAdBKtFCFkedGtzXg8BZPONEY8XN9MMyOktFwFHXfEfmP1LXCvenblqvf6AAeNJnbRH4rpVRqJjTPGNrTl3qfq1Rd45TXxt1hkCJY0%252Bw8ou0BcrBwNfOqQDZ6ngRSgW0cPsNgPB3mtZPUHGBn5YtXTe6u5J4F0mUUU3YNxy3SQONGt3vcRtNqoa%252B1mxaJT%252Fne4BmqijOQeAFUdlMAxrBe4sJOr6jahJWdVTlj%252Bhl1i6PLM2aQrOa3lNLSJZoQIlOUZwya8bATquGOzl%26param4%3DiJzGF8UG5IXW5q6S3PN%252FbUqqPKvGFFa8mh6rSorTYZI%253D%26tab%3Dorganic%26ri%3D2&w=2334&h=3000&imgurl=image.cnbcfm.com%2Fapi%2Fv1%2Fimage%2F100496736-steve-jobs-march-2011-getty.jpg%3Fv%3D1513863842&rurl=https%3A%2F%2Fwww.cnbc.com%2F2018%2F10%2F02%2Fsteve-jobs-heres-what-most-people-get-wrong-about-focus.html&size=247.0KB&p=steve+jobs+images&oid=19c8b813ea8b8855c64c5dbd882b8371&fr2=&fr=yhs-iba-syn&tt=Steve+Jobs%3A+Here%26%2339%3Bs+what+most+people+get+wrong+about+focus&b=0&ni=21&no=2&ts=&tab=organic&sigr=PwOgR5axRW9o&sigb=c_afEDGBy1d.&sigi=Rz_qMqs5K6T.&sigt=HFJjp1Dsr5KD&.crumb=qlrHxhz/q94&fr=yhs-iba-syn&hsimp=yhs-syn&hspart=iba&type=asbw_8923_CHW_US_tid20073&param1=gywC8qI0c78SsMoaWrosg1sEByBupFM7r4xogojgMQffiPa%2B%2BJHh1VNFUrSg%2BFVu&param2=9dUI1n2R0BLDxNuWfiP4aWyjOZc2NBa%2Bx2opBYQCDMSB7nBAfwbAzkkglZNKi5o21u72Jm8TatlnU7NDGbP7F8Lft0aXvravgWuUt1wLTDRGoZDy1s38eFH2mqhQf7J35YCbQdFh0U0Q40PE25%2BEeG%2Bt%2By660cfFWnTypqgOdcDjrQOcdIhh%2BgPSFPZWJGUiWYUZ6k%2BPDsRD5ZB1Jd%2FrvFaF5j%2BQJMzGoRJFYAx1vqBMwLh%2FoaVyFYzs7y7MXAxX5gy55Q21PEItOuSLEcAQKm%2F5vsaOu7EprdVdWmQiyVHsa7XJx%2FeeZSTXhnWA1X3f98ac6dE8PJVFMXc5GGWFXA%3D%3D&param3=NwVEMR%2FzKcG52XsVBYEh2zk2Yklq85vdfspZPoqz2M1qypHRDDTed5vIiOf0QJloIYNIhURx5ygk43IbuWBmnfLApzQNuNyJQuCIFEosygzUObTBvpAdBKtFCFkedGtzXg8BZPONEY8XN9MMyOktFwFHXfEfmP1LXCvenblqvf6AAeNJnbRH4rpVRqJjTPGNrTl3qfq1Rd45TXxt1hkCJY0%2Bw8ou0BcrBwNfOqQDZ6ngRSgW0cPsNgPB3mtZPUHGBn5YtXTe6u5J4F0mUUU3YNxy3SQONGt3vcRtNqoa%2B1mxaJT%2Fne4BmqijOQeAFUdlMAxrBe4sJOr6jahJWdVTlj%2Bhl1i6PLM2aQrOa3lNLSJZoQIlOUZwya8bATquGOzl&param4=iJzGF8UG5IXW5q6S3PN%2FbUqqPKvGFFa8mh6rSorTYZI%3D'
        },
        {
            name: 
        }
    ]
    }
   render() {
      return (  
          <div>this.props.student.name</div>
      );
   }
}
export default Student ;