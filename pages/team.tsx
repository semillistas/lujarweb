import * as React from 'react'
import {NextPageContext} from "next";
import {getTeamMembers, TeamMember} from "../lib";

interface Props {
    members: TeamMember[]
}

const Team = (props: Props) => {
    return <div>
        <h1>Our team</h1>
        <ul>
            {
                props.members.map(member => (
                    <li>
                        {
                            member.name
                        }
                    </li>
                ))
            }
        </ul>
    </div>
}

export default Team

export async function getStaticProps({ locale }) {
    const team = getTeamMembers(locale.substr(0,2))
    return {
        props: {
            members: team
        }, // will be passed to the page component as props
    }
}
