import { Container, Flex, Box } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Footer as FooterWrapper, SocialImage } from "./style";
import { UserImage } from "@/pages/home/style";
import { userData } from "@/utils/userData";
import { FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/styles/Buttons";
import lattesImg from "@/public/static/img/logo/lattesImg.svg";
// import { HandEffect } from "../HandEffect";

export const Footer = (): JSX.Element => {
	return (
		<FooterWrapper id="social-media">
			<Container>
				<Flex>
					<UserImage
						src={`https://github.com/${userData.githubUser}.png`}
						alt={userData.nameUser}
						title={userData.nameUser}
						width={"70px"}
						height={"70px"}
					/>
					<Box css={{ marginLeft: "$2" }}>
						<Text
							type="heading4"
							color="grey5"
							css={{ marginBottom: "$2" }}
						>
							Thank you! {/* <HandEffect /> */}
						</Text>
						<Text type="body1" color="grey2">
							Follow me on my social networks and let's talk
						</Text>
					</Box>
				</Flex>
				<Flex
					css={{
						flexWrap: "wrap",
						justifyContent: "center",
						gap: "$2",
					}}
				>
					<Button
						className="linkedin"
						type="circle"
						as="a"
						target="_blank"
						href={`https://linkedin.com/in/${userData.linkedinUser}`}
					>
						<FaLinkedinIn />
					</Button>
					<Button
						className="lattes"
						type="circle"
						as="a"
						target="_blank"
						href={`http://lattes.cnpq.br/${userData.lattesUser}`}
					>
						<SocialImage
							src={lattesImg}
							alt={"lattes"}
							title={"lattes"}
							width={"18px"}
						/>
					</Button>
				</Flex>
			</Container>
		</FooterWrapper>
	);
};
