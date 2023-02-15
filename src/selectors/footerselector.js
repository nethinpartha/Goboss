import React from 'react';
import { useSelector } from 'react-redux';
import instagram from "../assets/instagram.svg";
import twittersign from "../assets/twitter-sign.svg";
import facebookimg from "../assets/facebook.svg";
import { pathOr } from 'ramda';


function FooterResults() {
  return useSelector(state => pathOr('', ['Footer', 'records', 'result', 'components'])(state));
}

function ThemeIconSelector() {
  return useSelector(state => pathOr('', ['ThemeState', 'icons'])(state))
}



export const __parseFooterContent = () => {
  const footercontent = FooterResults();
  const socialicons = ThemeIconSelector();
  const quicklinks = footercontent ? footercontent.filter(data => data.componentType === 'footerLinks') : [];
  const support = footercontent ? footercontent.filter(data => data.componentType === 'footerSupport') : [];
  const sociallinks = footercontent ? footercontent.filter(data => data.componentType === 'socialLinks') : [];
  const appLinks = footercontent ? footercontent.filter(data => data.componentType === 'appLinks') : [];
  const iconsfromthemes = {
    facebook: pathOr(facebookimg, ['facebook'])(socialicons),
    youtube: pathOr('', ['youtube'])(socialicons),
    twitter: pathOr(twittersign, ['twitter'])(socialicons),
    instagram: pathOr(instagram, ['instagram'])(socialicons)
  }
  const social = pathOr([], ['0', 'content', 'data'])(sociallinks);
  const __parseSocialData = social.map(data => {
    return {
      title: data.title,
      url: data.url,
      icon: iconsfromthemes[`${data.title}`]
    }
  })
  return {
    quickLinks: {
      title: pathOr('', ['0', 'componentTitle'])(quicklinks),
      content: pathOr('', ['0', 'content', 'data'])(quicklinks)
    },
    support: {
      title: pathOr('', ['0', 'componentTitle'])(support),
      content: pathOr('', ['0', 'content', 'data'])(support)
    },
    appLinks: {
      title: pathOr('', ['0', 'componentTitle'])(appLinks),
      content: pathOr('', ['0', 'content', 'data'])(appLinks)
    },
    socialicons: __parseSocialData,
    socialiconstitle: pathOr('', ['0', 'componentTitle'])(sociallinks)
  }
}