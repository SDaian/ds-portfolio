import { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Experience } from '../../typings';

type Data = {
  experiences: Experience[];
};

const query = groq`*[_type=="experience"]{
  company,
  isCurrentlyWorkingHere,
  dateStarted,
  dateEnded,
  jobTitle,
  technologies[]->{
    image,
    title
  }
}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = await sanityClient.fetch(query);

  console.log(experiences);
  res.status(200).json({ experiences });
}
