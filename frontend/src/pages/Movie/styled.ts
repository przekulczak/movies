import styled from "styled-components";
import { colors } from "../../config";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Card = styled.section`
  display: flex;
  gap: 20px;
  padding: 20px;
  background: ${colors.backgroundSecondary};
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  flex-direction: column;
`;

export const Poster = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
  border-radius: 8px;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${colors.textPrimary};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Meta = styled.div`
  display: flex;
  gap: 16px;
  color: ${colors.textTertiary};
  font-size: 1rem;
  flex-wrap: wrap;
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Overview = styled.p`
  color: ${colors.textPrimary};
  line-height: 1.6;
  font-size: 1.1rem;
  margin: 0;
`;

export const ImdbLink = styled.a`
  color: ${colors.externalLink};
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 600;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const AdultBadge = styled.span`
  background: ${colors.error};
  color: ${colors.textPrimary};
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
`;

export const Countries = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Country = styled.span`
  background: ${colors.badge};
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
`;
