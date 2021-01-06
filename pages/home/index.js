import { useEffect, useState } from "react"


const news = [
    {
       "_id":"5fe717ea99cea30379608f2a",
       "title":"Game Mobile",
       "data":[
          {
             "_id":"5fe71a1399cea30379608f2f",
             "title":"Tốc Chiến tụt hạng thảm hại trên Google Play, nguy cơ đi vào vết xe đổ của “Liên Minh Mobile”?",
             "cover_url":"https://gamek.mediacdn.vn/zoom/310_200/133514250583805952/2020/12/26/page-16089735987481649190437.jpg",
             "introduction":"Tốc Chiến đang phải nhận những phản hồi vô cùng tiêu cực trên Google Play vì lý do giống hệt với tựa game từng tự nhận mình là Liên Minh Mobile khi xưa.",
             "id_channel":"5fe717ea99cea30379608f2a"
          },
          {
             "_id":"5fe72434d9f996d21003d315",
             "title":"Làm móng chơi noel, nữ game thủ sexy khiến cộng đồng PUBG Mobile choáng váng, thương xót cho chiếc điện thoại+",
             "cover_url":"https://gamek.mediacdn.vn/zoom/310_200/133514250583805952/2020/12/26/837287922928324217634332190119121378429262n-1608971233696690714335.jpg",
             "id_channel":"5fe717ea99cea30379608f2a",
             "introduction":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn...."
          },
          {
             "_id":"5fe72434d9f996d21003d316",
             "title":"Tình Kiếm 3D mở “livestream mừng sinh nhật 2 tuổi”, Game thủ Việt có cơ hội rinh ngay phần quà hơn 1 tỷ đồng",
             "cover_url":"https://gamek.mediacdn.vn/zoom/310_200/pr/2020/1608963889993-0-0-562-899-crop-1608963892728-63744592420842.jpg",
             "id_channel":"5fe717ea99cea30379608f2a",
             "introduction":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn...."
          },
          {
             "_id":"5fe73546d9f996d21003d319",
             "title":"Loạt game mobile miễn phí đỉnh nhất đã 'đến tay' game thủ Việt trong năm 2020 này",
             "cover_url":"https://gamek.mediacdn.vn/zoom/310_200/133514250583805952/2020/12/26/anh3-16089615502651018306286.png",
             "id_channel":"5fe717ea99cea30379608f2a",
             "introduction":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn...."
          },
          {
             "_id":"5fe73546d9f996d21003d31a",
             "title":"Game thủ thế giới phát sốt với phiên bản Among Us 3D đúng chất 18+, thứ không dành cho kẻ yếu đuối",
             "cover_url":"https://gamek.mediacdn.vn/zoom/310_200/133514250583805952/2020/12/25/maxresdefault-1608914883120510823022.jpg",
             "id_channel":"5fe717ea99cea30379608f2a",
             "introduction":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn...."
          },
          {
             "_id":"5fe73546d9f996d21003d31b",
             "title":"\"Thánh nữ\" áo 2 dây livestream và phản ứng \"kỳ lạ\" của cộng đồng chiến thuật: 500 anh em đã thoát khỏi \"ham muốn trần phàm\"?",
             "cover_url":"https://gamek.mediacdn.vn/zoom/310_200/133514250583805952/2020/12/25/untitled-2-1608887607878763032174.jpg",
             "id_channel":"5fe717ea99cea30379608f2a",
             "introduction":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn...."
          },
          {
             "_id":"5fe73546d9f996d21003d31c",
             "title":"Không cần \"nhảy nhót hở hang\", gái xinh vẫn \"làm loạn\" TikTok với màn dance cover cực ngọt, xuất hiện \"nhân tố đặc biệt\" từ Gun Gun",
             "cover_url":"https://gamek.mediacdn.vn/zoom/310_200/133514250583805952/2020/12/26/untitled-3-16089710777401949259408.jpg",
             "id_channel":"5fe717ea99cea30379608f2a",
             "introduction":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn...."
          },
          {
             "_id":"5fe73546d9f996d21003d31d",
             "title":"Đại Sứ Kiếm Gấu Suni Hạ Linh tung \"Vũ Điệu Thoát Ế\" trên Tiktok, sưởi ấm trái tim cô đơn của 500 anh em Gun Gun",
             "cover_url":"https://gamek.mediacdn.vn/zoom/310_200/133514250583805952/2020/12/23/sni-1608721969392224648452.gif",
             "id_channel":"5fe717ea99cea30379608f2a",
             "introduction":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn...."
          }
       ]
    },
    {
       "_id":"5fe717fe99cea30379608f2b",
       "title":"LMHT",
       "data":[
          {
             "_id":"5fe7388fd9f996d21003d321",
             "title":"Ra mắt tướng mới Rell và trang phục Rell Nữ Thần Chiến Binh từ ngày 11/12",
             "cover_url":"https://lienminh.garena.vn/images/Lan_h3lpm3/12_2020/MoBanRell-800x450.jpg",
             "introduction":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn....",
             "id_channel":"5fe717fe99cea30379608f2b"
          },
          {
             "_id":"5fe7388fd9f996d21003d322",
             "title":"Ra mắt Vé Nữ Thần Chiến Binh - Chơi game nhận quà trị giá hơn 1500 RP chỉ với 200 RP từ 11/12 đến 12/01",
             "cover_url":"https://lienminh.garena.vn/images/Lan_h3lpm3/12_2020/VeNuThan-800x450.jpg",
             "introduction":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn....",
             "id_channel":"5fe717fe99cea30379608f2b"
          },
          {
             "_id":"5fe7388fd9f996d21003d323",
             "title":"Quy đổi RP - Nhận ngay trang phục Azir, Ivern Thần Rừng mới chỉ với 40 RP từ 00:30 11/12 đến 23:59 17/12",
             "cover_url":"https://lienminh.garena.vn/images/Lan_h3lpm3/12_2020/01-quydoinhanskin-800x450.jpg",
             "introduction":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn....",
             "id_channel":"5fe717fe99cea30379608f2b"
          },
          {
             "_id":"5fe7388fd9f996d21003d324",
             "title":"https://lienminh.garena.vn/images/Lan_h3lpm3/12_2020/218-TopUp-800x450.jpg",
             "cover_url":"https://lienminh.garena.vn/images/Lan_h3lpm3/12_2020/218-TopUp-800x450.jpg",
             "introduction":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn....",
             "id_channel":"5fe717fe99cea30379608f2b"
          },
          {
             "_id":"5fe7388fd9f996d21003d325",
             "title":"Tham gia \"Mua 1 Tặng 2\" - Sở hữu trang phục giá rẻ cùng tặng phẩm hấp dẫn từ 25/12 đến 31/12",
             "cover_url":"https://lienminh.garena.vn/images/Lan_h3lpm3/12_2020/01-Mua-1-tng-2-800x450.jpg",
             "introduction":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unkn....",
             "id_channel":"5fe717fe99cea30379608f2b"
          }
       ]
    },
    {
       "_id":"5fe7181499cea30379608f2c",
       "title":"PC / Console",
       "data":[
          
       ]
    },
    {
       "_id":"5fe7184b99cea30379608f2d",
       "title":"Gamming Gear",
       "data":[
          
       ]
    },
    {
       "_id":"5fe7185d99cea30379608f2e",
       "title":"Xàm",
       "data":[
          
       ]
    }
 ]


function Post(props) {

    return (
        <p>Post </p>
    )
}


export default function Home() {
    const [channels, setChannels] = useState()

    useEffect(() => {

        getApiChannel()
    }, [ ])


    async function getApiChannel() {

        const result = await fetch('http://localhost:3000/api/channel/getAll')
        const data = await result.json()
        if (data) {
            console.log('has data');
            setChannels(data)
        } else {
            console.log('no data');
            setChannels([])
        }

    }


    return (
        <div>

          

            <p>News</p>
            
       
        </div>
    )
}