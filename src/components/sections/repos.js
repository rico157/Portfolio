import React, { useEffect, useContext, useRef, useState } from "react"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"
import PropTypes from "prop-types"

import Button from "../../styles/button"
import { useOnScreen } from "../../hooks"
import Context from "../../context"
import ContentWrapper from "../../styles/contentWrapper"
import Underlining from "../../styles/underlining"
import { lightTheme, darkTheme } from "../../styles/theme"
import { fetchRepos } from "../../utils"

const StyledSection = motion.custom(styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  .cta-btn {
    display: block;
    text-align: center;
    margin: 4rem auto;
    /* padding-top: 4rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: 0 auto;
      padding-top: 0rem;
    } */
  }
`)

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
    .repos {
      display: flex;
      justify-content: flex-start;
      overflow-x: scroll;
      overflow-y: hidden;
      -webkit-overflow-scrolling: touch;
      margin: -2rem 0 0 0;
      padding: 0 2rem;
      &::-webkit-scrollbar {
        display: none;
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        padding: 0 1rem;
      }
      /* Show scrollbar if desktop and wrapper width > viewport width */
      @media (hover: hover) {
        scrollbar-color: ${({ theme }) => theme.colors.scrollBar} transparent; // Firefox only
        &::-webkit-scrollbar {
          display: block;
          -webkit-appearance: none;
        }

        &::-webkit-scrollbar:horizontal {
          height: 0.8rem;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 8px;
          border: 0.2rem solid ${({ theme }) => theme.colors.background};
          background-color: ${({ theme }) => theme.colors.scrollBar};
        }

        &::-webkit-scrollbar-track {
          background-color: ${({ theme }) => theme.colors.background};
          border-radius: 8px;
        }
      }
    }
    .card {
      width: 16.25rem;
      height: 12rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1rem;
      margin: 2rem 1rem;
      box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadow};
      border-radius: ${({ theme }) => theme.borderRadius};
      background: ${({ theme }) => theme.colors.card};
      transition: box-shadow 0.3s ease-out;
      &:hover {
        box-shadow: 0 5px 15px ${({ theme }) => theme.colors.boxShadowHover};
      }
      &:hover ${Underlining} {
        box-shadow: inset 0 -1rem 0 ${({ theme }) => theme.colors.secondary};
      }
      @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
        margin: 2rem 2.5rem 2rem 0;
      }
      .category {
        color: ${({ theme }) => theme.colors.primary};
        text-transform: uppercase;
        letter-spacing: +1px;
        font-weight: 700;
      }
      .title {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
      }
      .date {
        font-size: 0.75rem;
        color: ${({ theme }) => theme.colors.subtext};
        letter-spacing: +0.5px;
      }
    }
  }
`

const Repos = () => {
  const { isIntroDone, darkMode } = useContext(Context).state
  const reposControls = useAnimation()
  const [repos, setRepos] = useState([])

  // Required for animating the button
  const bRef = useRef()
  const bOnScreen = useOnScreen(bRef)
  const bVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  // Load and display repos after the splashScreen sequence is done
  useEffect(() => {
    const loadRepos = async () => {
      fetchRepos().then(({ data }) => {
        const repos = data.filter(repo => repo.description)
        setRepos(repos)
      })
      if (isIntroDone) {
        await reposControls.start({
          opacity: 1,
          y: 0,
          transition: { delay: 1 },
        })
      }
    }
    loadRepos()
  }, [isIntroDone, reposControls])

  return (
    <StyledSection
      id="repos"
      initial={{ opacity: 0, y: 20 }}
      animate={reposControls}
    >
      <StyledContentWrapper>
        <h3 className="section-title">Repositories</h3>
        <div className="repos">
          {repos.map(repo => (
            <a
              href={repo.url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              title={repo.name}
              aria-label={repo.url}
              key={repo.url}
            >
              <div className="card">
                <span className="category">
                  <Underlining color="tertiary" hoverColor="secondary">
                    {repo.name}
                  </Underlining>
                </span>
                <h4 className="title">{repo.description}</h4>
              </div>
            </a>
          ))}
        </div>
      </StyledContentWrapper>
      <motion.a
        ref={bRef}
        variants={bVariants}
        animate={bOnScreen ? "visible" : "hidden"}
        className="cta-btn"
        href="https://github.com/rico157"
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label="External Link"
      >
        <Button type="button" textAlign="center" center>
          See more on GitHub
        </Button>
      </motion.a>
    </StyledSection>
  )
}

export default Repos
