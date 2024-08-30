import React, { useState } from "react";
import '../styles/Photography.css';
import monkeyEatingFlower from '../assets/images/monkeyEatingFlower.jpeg';
import eagle from '../assets/images/eagle.jpeg';
import georgetown from '../assets/images/georgetown.jpeg';
import monkeysCuddling from '../assets/images/monkeyscuddling.jpeg';
import mutiara from '../assets/images/mutiara.jpeg';
import hornbill from '../assets/images/hornbill.jpeg';
import swallow from '../assets/images/swallow.jpeg';
import PhotoModal from "./PhotoModal";


export default function Photography({ showBackground }) {
    const albums = [
        {
            name: "Boulder",
            images: [
                {
                    url: "https://i.imgur.com/5KSw2m7.png",
                    title: "Stars above Buckingham Park",
                    description: "Taken from another CU Astronomy Dark Sky Trip, I shot this picture over the course of a few hours next to a river in Buckingham park during the freezing winter."
                },
                {
                    url: "https://i.imgur.com/F7LlEUG.png",
                    title: "Stars above Boulder Valley Ranch",
                    description: "This breathtaking picture may look fake but it is very real. Even I was surprised. The glow on the left comes from the bright moon off the frame and the glow from the valley came from the setting sun. This picture was taken over the span of an hour."
                },
                {
                    url: "https://i.imgur.com/gk727za.png",
                    title: "late night bus vibes",
                    description: "Maybe it's a little disappointing knowing that you can't keep hanging out with your friends at 11pm."
                },
                {
                    url: "https://i.imgur.com/be73A6f.png",
                    title: "Last bus of the day",
                    description: "Something about the soft blue lights and the empty bus makes me feel like I'm in a movie."
                },
                {
                    url: "https://i.imgur.com/iVYnQns.png",
                    title: "Orion Nebula",
                    description: "The orion nebula taken by me at CU Astronomy club's dark sky trip."
                },
                {
                    url: "https://i.imgur.com/CQFByfJ.png",
                    title: "Winter Sunset with Birds",
                    description: "This picture was taken on my hike down from the Flatirons. The birds on the barren winter tree in front of the beautiful colorful pastel sunset make for a stunning contrast."
                },
            ]
        },
        {
            name: "Malaysia",
            images: [
                {
                    url: mutiara,
                    title: "Mutiara Train",
                    description: "The Mutiara train that took us to the top of Penang Hill."
                },
                {
                    url: "https://i.imgur.com/J1HQR4z.jpg",
                    title: "Wild Dusky Langur",
                    description: "After taking the Mutiara train to the top of penang island, we were greeted by some monkeys overhead."
                },
                {
                    url: monkeysCuddling,
                    title: "Dusky Langur Family Cuddling at Penang Hill",
                    description: "A parent and child langur cuddling on a tree at Penang Hill."
                },
                {
                    url: monkeyEatingFlower,
                    title: "Monkey Eating Flower",
                    description: "Sitting on top of a tall tree on Penang Hill, I caught this monkey picking and eating flowers off the tree."
                },
                {
                    url: eagle,
                    title: "Eagle perching on a dead tree at the river bank",
                    description: "Some fish eagle perching on a tall dead tree watching as our tour boat sped by in the river."
                },
                {
                    url: hornbill,
                    title: "Hornbill",
                    description: "A hornbill flying above the trees in the jungles of nothern Malaysia."
                },
                {
                    url: swallow,
                    title: "Swallow",
                    description: "A Swallow resting on a dead tree in the river."
                },
                {
                    url: georgetown,
                    title: "Somewhere in Georgetown",
                    description: "A street I passed by in Georgetown, Penang. The vibrant and old buildings housing closed shops contrast the tourists walking by."
                }
            ]
        },
        {
            name: "Flowers",
            images: [
                {
                    url: "https://i.imgur.com/f0GHx7v.png",
                    title: "Backyard Rose",
                    description: "A beautiful red rose, \nits petals soft and delicate, \ndancing in the gentle breeze, \na sight to behold. \nI shot this beautiful rose in the backyard of my sister's house."
                },
                {
                    url: "https://i.imgur.com/nQSu07p.png",
                    title: "Flower Farm in Hokkaido",
                    description: "Taken during my visit to a lavender farm in Hokkaido."
                },
                {
                    url: "https://i.imgur.com/qG4XV26.png",
                    title: "False bird of paradise",
                    description: "A beautiful false bird of paradise flower"
                },
                {
                    url: "https://i.imgur.com/YE9xsVa.jpg",
                    title: "Our busy pollinators",
                    description: "A fuzzy bee in a sunflower"
                }
            ]
        }
    ]

    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState(albums[0].images[0]);

    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <div id="photography" className="section-container">
            <div className={`background ${showBackground ? '' : 'bg-hidden'}`}></div>
            <div className="container">
                <div className="title">
                    <h1>Photography</h1>
                </div>

                <div className="full-content">
                    {albums.map((album, index) => (
                        <div key={index} className={`text-content-container ${showBackground ? '' : 'simple'}`}>
                            <h2 className="item-header">{album.name}</h2>
                            <div className="album-gallery">
                                {album.images.map((image, i) => (
                                        <img key={i} className="gallery-image" src={image.url} alt={image.title} onClick={() => {
                                            setModalImage(image);
                                            setShowModal(true);
                                        }}/>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="image-credit">
                    Photo of the Boulder Valley Ranch in Colorado by Me.
                </div>
            </div>
            <PhotoModal 
                show={showModal} 
                handleClose={handleClose} 
                imageUrl={modalImage.url} 
                imageTitle={modalImage.title} 
                imageDescription={modalImage.description}
            />
        </div>
    )
}