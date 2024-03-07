import { Card, Carousel, Box, Image } from "../../../components";

const images: any = [
  "https://base.matterofform.com/media/1zudodgf/frans-ruiter-phnfcr2eh00-unsplash.jpg?width=1600&format=webp",
  "https://base.matterofform.com/media/uziesd2a/anthony-delanoix-cfi7_hcxecu-unsplash.jpg?width=1600&format=webp",
  "https://base.matterofform.com/media/44lnxixr/a7f1ed2ef6b95603a7fe9591043396e2.jpeg?width=1600&format=webp",
];

export default function Page({ params }: { params: { slug: string } }) {
  const renderItems = images.map((val: any, i: number) => {
    return (
      <Image key={`zhaCarousel${i}`} src={images[i]} width={500} alt="yay" />
    );
  });

  return (
    <>
      <Box>hey</Box>
      <Carousel
        items={renderItems}
        controls={{
          show: false,
          directionComponent: null,
        }}
        crop={false}
        showPagination={false}
        loop
        gap={5}
        width={500}
        height={350}
      />
      <Card
        data={{
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec vestibulum eros. Curabitur ac libero malesuada, feugiat ligula quis, sodales diam. ",
          headingTitle: "Blog Article Title",
          image: {
            caption: "One-by-one logo",
            imageAlt: "A simple One-by-one logo stock for testing purposes. ",
            imageUrl:
              "https://media.idorchester.com/api/v1/media/ox4khfi1/le-meurice-facade-5.jpg",
            isSvg: false,
            isVideo: false,
            mediaId: 1382,
          },
          preHeading: "Editorial",
          primaryCta: "View article",
          subHeading:
            "07.07.2023 &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; 15 minutes",
        }}
        size="lg"
        variant="primary"
      />
    </>
  );
}
