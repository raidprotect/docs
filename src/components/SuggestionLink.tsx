import Link from '@docusaurus/Link';
import React from 'react';

const BASE_URL = "https://suggestions.raidprotect.bot/";

export default function SuggestionLink({ id }) {
  return <Link href={`${BASE_URL}${id}`} style={{ color: 'rgba(225, 224, 233, 0.505)' }} target="_blank" >#{id}</Link>;
}