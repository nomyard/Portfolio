import React from 'react'
import Link from 'gatsby-link'
import { Parallax, Background } from 'react-parallax'

import philly from '../resources/images/philly.jpg'

const IndexPage = () => (
  <div>
    <Parallax strength={500} style={{marginBottom: '2rem', width: 'auto', borderRadius: '12px'}} bgImage={philly}>
      <div style={{ height: '300px'}} />
    </Parallax>
    <p style={{borderLeft: 'solid 1px black', padding: '2rem'}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare
      lacinia lacus. Ut mollis dictum hendrerit. Mauris blandit massa et velit
      hendrerit, at accumsan leo dapibus. Suspendisse blandit mi vel dui
      vehicula accumsan. Nam sagittis quis mi ac scelerisque. Nam condimentum
      elit in tellus suscipit, ullamcorper laoreet ante sollicitudin. Etiam
      interdum justo risus, eu molestie metus commodo eget. Vestibulum sit amet
      est hendrerit, porta libero a, cursus eros. Pellentesque pretium nulla sit
      amet congue consectetur. Duis euismod urna orci, ut rhoncus augue posuere
      at. Mauris vulputate egestas velit, in rutrum nibh. Sed ornare felis eu
      turpis pulvinar pulvinar. Maecenas auctor eros ac ante malesuada, et
      ornare dui scelerisque. Integer suscipit pellentesque ipsum non gravida.
      Nunc convallis odio et malesuada iaculis. Vestibulum eget gravida nulla,
      non maximus mauris. Maecenas pulvinar ipsum id libero bibendum tincidunt.
      Etiam condimentum sem eget velit eleifend sollicitudin. Integer turpis
      leo, pharetra a euismod sollicitudin, lobortis non massa. Proin blandit
      rhoncus ante. Donec varius pharetra dictum. Etiam dignissim dictum lacus,
      eu gravida nibh cursus non. Nam sed nisi venenatis, maximus felis sed,
      vulputate arcu. Duis suscipit tempus orci sed vehicula. Duis ante justo,
      condimentum at accumsan interdum, cursus fermentum sem. Aenean varius at
      lorem eget efficitur. Pellentesque rhoncus nibh ut nibh facilisis
      pharetra. Vestibulum eu fringilla libero, nec egestas felis. Praesent
      lacinia eros eget orci lacinia, non eleifend libero rutrum. Sed laoreet,
      lorem eget porta elementum, enim purus dapibus dolor, vel rhoncus risus ex
      ut ipsum. Mauris at ultricies dolor. Pellentesque tempor leo eget cursus
      egestas. Donec ultrices tellus et massa vehicula, non varius est
      facilisis. Praesent finibus nisi quis mi tempus commodo. Integer viverra
      laoreet consequat. Donec molestie at ligula nec fringilla. Integer
      volutpat sapien nec arcu consequat, vel finibus erat vulputate. Vivamus
      tincidunt massa at felis imperdiet, id ornare nunc rutrum. Phasellus
      sodales arcu a felis sodales facilisis. Phasellus quis augue hendrerit,
      lacinia eros eu, vestibulum mi. Duis finibus leo ac porttitor aliquet.
      Integer sollicitudin eget enim non luctus. Duis quis nisl diam. Cras non
      gravida lorem, vitae aliquam dolor. Proin vestibulum nibh nec nisi
      pharetra, sed fringilla tellus semper. Etiam dapibus aliquam nibh, sed
      pulvinar justo posuere sed. Maecenas dictum scelerisque fringilla.
      Suspendisse ornare faucibus arcu ac mattis. Donec vulputate est nec
      euismod laoreet. Praesent volutpat erat eu massa eleifend rutrum. Lorem
      ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis purus
      nulla, sit amet iaculis sem ultrices in. Cras convallis diam eu magna
      rutrum dapibus. Suspendisse et velit massa. Etiam scelerisque porta
      bibendum. Aliquam porttitor ligula ipsum, ac volutpat justo scelerisque
      vel. Etiam suscipit lacus quis massa porttitor feugiat. Pellentesque quis
      neque fringilla, ultricies dolor nec, hendrerit tellus. Nunc sit amet sem
      euismod, sagittis metus nec, lacinia ex. Pellentesque id condimentum
      metus, quis vehicula lacus. Interdum et malesuada fames ac ante ipsum
      primis in faucibus. Nunc auctor augue accumsan metus iaculis viverra.
      Proin mi dui, sagittis non dapibus eu, hendrerit eget orci. Nullam
      vulputate tempor nunc ac vehicula. Duis laoreet orci non vehicula congue.
      Phasellus tempor posuere urna, sed tincidunt augue scelerisque id. Sed
      auctor massa quam. Donec at sapien metus. Pellentesque vel pulvinar velit.
      Etiam porttitor mi eu risus fringilla auctor. Proin pharetra diam sit amet
      erat vulputate, vitae tempor ligula condimentum. Pellentesque at rhoncus
      diam. Quisque porta libero sem, sed elementum risus tincidunt et.
    </p>

    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
