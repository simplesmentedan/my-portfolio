// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
	Header,
	HeaderContent,
	HeaderButtonsArea,
	UserImage,
	StackCards,
	ProjectsArea,
	ProjectsAreaSocialMediaMessage,
	ProjectAreaWrapperColumns,
	ProjectsAreaContent,
	StacksArea,
} from "./style";

export const Home = (): JSX.Element => {
	const gihubUrl = `https://github.com/${userData.githubUser}`;
	const portfolioUrl = `https://github.com/${userData.githubUser}/my-portfolio`;

	return (
		<main id="home">
			<Header>
				<Container>
					<HeaderContent>
						<Flex>
							<UserImage
								src={`https://github.com/${userData.githubUser}.png`}
								alt={userData.nameUser}
								title={userData.nameUser}
								width={"48px"}
								height={"48px"}
							/>
							<Text color="grey4" type="heading3">
								Opaaa, me chamo{" "}
								<Text as="span" type="heading3" color="brand1">
									{userData.nameUser}
								</Text>
							</Text>
						</Flex>
						<Text as="p" color="grey2" type="body1">
							Sou um jovem amapaense, 22 anos. Aos 15 iniciei meus
							interesses pela tecnologia ao ingressar no ensino
							médio integrado Técnico em Informática. Desde então,
							enxergo a Tecnologia da Informação como uma área do
							conhecimento capaz de beneficiar empresas e a
							sociedade e, ainda poder transversalizar outras
							áreas agregando valor de forma conjunta em prol de
							um mundo melhor.
						</Text>
						<Text as="p" color="grey2" type="body1">
							Atualmente, estou finalizando a formação de
							desenvolvedor full-stack pela Kenzie Academy Brasil.
							De maneira concomitante, sou estudante de Ciência da
							Computação pela Universidade Federal do Amapá -
							UNIFAP e bolsista PICME pelo CNPq/CAPES.
						</Text>
						<StacksArea id="stacks">
							<Text as="h1" type="heading1" color="grey5">
								Criar e{" "}
								<Text as="span" type="heading1" color="brand1">
									desenvolver
								</Text>{" "}
								projetos é minha{" "}
								<Text as="span" type="heading1" color="brand1">
									paixão
								</Text>
							</Text>

							<Text type="body1" color="grey2">
								Descubra aqui neste ambiente, criado
								especialmente para você, todos os meus projetos
								e tecnologias.
							</Text>
							<HeaderButtonsArea>
								<Button as="a" type="primary" href="#projects">
									Ver Projetos
								</Button>
								<Button
									as="a"
									type="outline"
									target="_blank"
									href={portfolioUrl}
								>
									Ver código-fonte deste portfólio
								</Button>
								<Button
									color="grey5"
									as="a"
									css={{ "&:hover": { color: "$grey1" } }}
									type="circle"
									target="_blank"
									href={gihubUrl}
								>
									<FaGithub />
								</Button>
							</HeaderButtonsArea>
							<StackCards id="stacks">
								{stackData.map((stack, index) => (
									<Stack
										key={index}
										title={stack.title}
										icon={stack.img}
									/>
								))}
							</StackCards>
						</StacksArea>
					</HeaderContent>
				</Container>
			</Header>
			<ProjectsArea id="projects">
				<Container>
					<ProjectAreaWrapperColumns>
						<ProjectsAreaSocialMediaMessage>
							<Text as="h2" type="heading4" color="grey4">
								Meus projetos
							</Text>
							<Text as="p" type="body1" color="grey2">
								Alguns dos meus{" "}
								<Text as="span" color="brand5">
									projetos paralelos
								</Text>
							</Text>
						</ProjectsAreaSocialMediaMessage>
						<ProjectsAreaContent>
							<Project />
						</ProjectsAreaContent>
					</ProjectAreaWrapperColumns>
				</Container>
			</ProjectsArea>
			<Contacts />
		</main>
	);
};
