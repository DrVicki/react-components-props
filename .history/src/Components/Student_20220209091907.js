//here is a boilerplate component structure
import React, { Component } from 'react';


class Student extends Component {

    constructor(props) {
        super(props);
    
    this.state = { 
        //students array
        students: [{
            name: 'Vicki Bealman',
            img: 'https://images.search.yahoo.com/yhs/search;_ylt=AwrC3PGWygNiaT8AyRQPxQt.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Nj?p=vicki+bealman+images&type=asbw_8923_CHW_US_tid20073&param1=gywC8qI0c78SsMoaWrosg1sEByBupFM7r4xogojgMQffiPa%2B%2BJHh1VNFUrSg%2BFVu&param2=9dUI1n2R0BLDxNuWfiP4aWyjOZc2NBa%2Bx2opBYQCDMSB7nBAfwbAzkkglZNKi5o21u72Jm8TatlnU7NDGbP7F8Lft0aXvravgWuUt1wLTDRGoZDy1s38eFH2mqhQf7J35YCbQdFh0U0Q40PE25%2BEeG%2Bt%2By660cfFWnTypqgOdcDjrQOcdIhh%2BgPSFPZWJGUiWYUZ6k%2BPDsRD5ZB1Jd%2FrvFaF5j%2BQJMzGoRJFYAx1vqBMwLh%2FoaVyFYzs7y7MXAxX5gy55Q21PEItOuSLEcAQKm%2F5vsaOu7EprdVdWmQiyVHsa7XJx%2FeeZSTXhnWA1X3f98ac6dE8PJVFMXc5GGWFXA%3D%3D&param3=NwVEMR%2FzKcG52XsVBYEh2zk2Yklq85vdfspZPoqz2M1qypHRDDTed5vIiOf0QJloIYNIhURx5ygk43IbuWBmnfLApzQNuNyJQuCIFEosygzUObTBvpAdBKtFCFkedGtzXg8BZPONEY8XN9MMyOktFwFHXfEfmP1LXCvenblqvf6AAeNJnbRH4rpVRqJjTPGNrTl3qfq1Rd45TXxt1hkCJY0%2Bw8ou0BcrBwNfOqQDZ6ngRSgW0cPsNgPB3mtZPUHGBn5YtXTe6u5J4F0mUUU3YNxy3SQONGt3vcRtNqoa%2B1mxaJT%2Fne4BmqijOQeAFUdlMAxrBe4sJOr6jahJWdVTlj%2Bhl1i6PLM2aQrOa3lNLSJZoQIlOUZwya8bATquGOzl&param4=iJzGF8UG5IXW5q6S3PN%2FbUqqPKvGFFa8mh6rSorTYZI%3D&hsimp=yhs-syn&hspart=iba&ei=UTF-8&fr=yhs-iba-syn&th=105&tw=80.2&imgurl=https%3A%2F%2Fwww.dev-vicki.com%2Fimages%2Fdevvicki.png&rurl=https%3A%2F%2Fwww.dev-vicki.com%2F&size=148KB&name=DevVicki+Portfolio+Website&oid=1&h=356&w=272&turl=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.X4soF6pRfKwadTTmwR4Q7QAAAA%26pid%3DApi%26rs%3D1%26c%3D1%26qlt%3D95%26w%3D80%26h%3D105&tt=DevVicki+Portfolio+Website&sigr=zSZz52sUbNnW&sigit=TGChNONclZIL&sigi=lllvIceRF8sI&sign=oTu7NT1OuOvc&sigt=oTu7NT1OuOvc'
        },
        {
            name: 'Mr. Rogers',
            img: 'https://tse2.mm.bing.net/th?id=OIP.MU4rh68JY5E9my5ywRbOEAHaJh&pid=Api&P=0&w=140&h=181'
        },
        {
            name: 'Bill Gates',
            img: 'https://tse4.mm.bing.net/th?id=OIP.r_qgxD6rkQQ0RxyBlhXpAAHaHa&pid=Api&P=0&w=164&h=164'
        }
    ],

    //pickFromAll boolean
    pickFromAll: true,
    pickedStudent: null
    }
}
   render() {
      return (  
          <div>{this.props.student && this.props.student</div>
      );
   }
}

export default Student ;