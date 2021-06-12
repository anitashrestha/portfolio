
import styled from 'styled-components'
import { SideNav } from 'carbon-components-react/lib/components/UIShell'
//To make our page mobile responsive, we’ll need to hide the Sidebar for mobile device screen widths

export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`