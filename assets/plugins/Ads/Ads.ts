export interface Ad {
    imageUrl: string,
    title: string,
    body: string,
    url: string
}

const ALL_ADS: Ad[] = [
    {
        imageUrl: 'https://i.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w',
        title: 'Example Ad #1',
        body: 'This is the Ad description',
        url: 'https://www.google.com'

    },
    {
        imageUrl: 'https://i.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s',
        title: 'Example Ad #2',
        body: 'This is the Ad description',
        url: 'https://www.google.com'

    },
    {
        imageUrl: 'https://i.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o',
        title: 'Example Ad #3',
        body: 'This is the Ad description',
        url: 'https://www.google.com'

    },
    {
        imageUrl: 'https://i.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4',
        title: 'Example Ad #4',
        body: 'This is the Ad description',
        url: 'https://www.google.com'

    },
    {
        imageUrl: 'https://i.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE',
        title: 'Example Ad #5',
        body: 'This is the Ad description',
        url: 'https://www.google.com'

    }
]

class Ads {
    private static instance: Ads;
    private ads: Ad[]
    private constructor(){
        this.initAds();
    }

    static getInstance() {
        if (!Ads.instance) {
            Ads.instance = new Ads();
        }

        return Ads.instance;
    }

    private initAds() {
        this.ads = [ ... ALL_ADS]
    }

    getAd() {
        if(this.ads.length === 0) {
            this.initAds();
        }

        return this.ads.pop();
    }
}

export default Ads;