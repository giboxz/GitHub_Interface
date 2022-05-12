import React from 'react'
import * as S from './styled'

function RepositoryItem( { name, linkToRepo, fullName, stargazers_count, forks_count }) {
  return (
    <S.Wrapper>
        <S.WrapperTitle>{ name }</S.WrapperTitle>
        <S.WrapperFullName>{ fullName }</S.WrapperFullName>
        <S.WrapperLink 
            href={ linkToRepo } 
            target="_blank" 
            without rel="noopener noreferrer"
        >
          Link GitHub
        </S.WrapperLink>
        <S.WrapperStatusCount>
                <div>
                    <h4>Forks</h4>
                    <span>{ forks_count }</span>
                </div>
                <div>
                    <h4>Stars</h4>
                    <span>{ stargazers_count }</span>
                </div>
        </S.WrapperStatusCount>
    </S.Wrapper>
  )
}

export default RepositoryItem