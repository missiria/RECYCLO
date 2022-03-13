/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import React, {useState} from 'react'
import {KTSVG} from '../../../_metronic/helpers'
import {getLayout, ILayout, LayoutSetup, useLayout} from '../../../_metronic/layout/core'

const BuilderPage: React.FC = () => {
  const {setLayout} = useLayout()
  const [tab, setTab] = useState('Header')
  const [config, setConfig] = useState<ILayout>(getLayout())
  const [configLoading, setConfigLoading] = useState<boolean>(false)
  const [resetLoading, setResetLoading] = useState<boolean>(false)

  const updateData = (fieldsToUpdate: Partial<ILayout>) => {
    const updatedData = {...config, ...fieldsToUpdate}
    setConfig(updatedData)
  }

  const updateConfig = () => {
    setConfigLoading(true)
    try {
      LayoutSetup.setConfig(config)
    } catch (error) {
      setConfig(getLayout())
    }
    setTimeout(() => {
      setLayout(config)
      setConfigLoading(false)
    }, 1000)
  }

  const reset = () => {
    setResetLoading(true)
    setTimeout(() => {
      setConfig(getLayout())
      setResetLoading(false)
    }, 1000)
  }

  return (
    <>
      <div className='card mb-10'>
        <div className='card-body d-flex align-items-center py-8'>
          {/* begin::Icon */}
          <div className='d-flex h-80px w-80px flex-shrink-0 flex-center position-relative'>
            <KTSVG
              path='/media/icons/duotune/abstract/abs051.svg'
              className='svg-icon-primary position-absolute opacity-15'
              svgClassName='h-80px w-80px'
            />
            <KTSVG
              path='/media/icons/duotune/coding/cod009.svg'
              className='svg-icon-3x svg-icon-primary position-absolute'
            />
          </div>
          {/* end::Icon */}

          {/* begin::Description */}
          <div className='ms-6'>
            <div className='fs-1'>Mis en page</div>
          </div>
          {/* end::Description */}
        </div>
      </div>
      <div className='card card-custom'>
        <div className='card-header card-header-stretch overflow-auto'>
          <ul
            className='nav nav-stretch nav-line-tabs fw-bold border-transparent flex-nowrap'
            role='tablist'
          >
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'Header'})}
                onClick={() => setTab('Header')}
                role='tab'
              >
                Entête
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'Toolbar'})}
                onClick={() => setTab('Toolbar')}
                role='tab'
              >
                Toolbar
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'PageTitle'})}
                onClick={() => setTab('PageTitle')}
                role='tab'
              >
                Titre de la page
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'Aside'})}
                onClick={() => setTab('Aside')}
                role='tab'
              >
                Barre latérale
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'Content'})}
                onClick={() => setTab('Content')}
                role='tab'
              >
                Contenu
              </a>
            </li>
            <li className='nav-item'>
              <a
                className={clsx(`nav-link cursor-pointer`, {active: tab === 'Footer'})}
                onClick={() => setTab('Footer')}
                role='tab'
              >
                Bas de page
              </a>
            </li>
          </ul>
        </div>
        {/* end::Header */}

        {/* begin::Form */}
        <form className='form'>
          {/* begin::Body */}
          <div className='card-body'>
            <div className='tab-content pt-3'>
              <div className={clsx('tab-pane', {active: tab === 'Header'})}>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>En-tête fixe:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <label className='form-check form-check-custom form-check-solid form-switch mb-5'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name='layout-builder[layout][header][fixed][desktop]'
                        checked={config.header.fixed.desktop}
                        onChange={() =>
                          updateData({
                            header: {
                              ...config.header,
                              fixed: {
                                ...config.header.fixed,
                                desktop: !config.header.fixed.desktop,
                              },
                            },
                          })
                        }
                      />
                      <span className='form-check-label text-muted'>Desktop</span>
                    </label>

                    <label className='form-check form-check-custom form-check-solid form-switch mb-3'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        checked={config.header.fixed.tabletAndMobile}
                        onChange={() =>
                          updateData({
                            header: {
                              ...config.header,
                              fixed: {
                                ...config.header.fixed,
                                tabletAndMobile: !config.header.fixed.tabletAndMobile,
                              },
                            },
                          })
                        }
                      />
                      <span className='form-check-label text-muted'>Tablet & Mobile</span>
                    </label>

                    <div className='form-text text-muted'>Enable fixed header</div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Contenu de gauche:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <select
                      className='form-select form-select-solid'
                      name='layout-builder[layout][header][width]'
                      value={config.header.left}
                      onChange={(e) =>
                        updateData({
                          header: {
                            ...config.header,
                            left: e.target.value as 'menu' | 'page-title',
                          },
                        })
                      }
                    >
                      <option value='menu'>Menu</option>
                      <option value='fixed'>Titre de la page</option>
                    </select>
                    <div className='form-text text-muted'>
                      Sélectionnez le type de contenu de l'en-tête gauche.
                    </div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Largeur :</label>
                  <div className='col-lg-9 col-xl-4'>
                    <select
                      className='form-select form-select-solid'
                      name='layout-builder[layout][header][width]'
                      value={config.header.width}
                      onChange={(e) =>
                        updateData({
                          header: {
                            ...config.header,
                            width: e.target.value as 'fixed' | 'fluid',
                          },
                        })
                      }
                    >
                      <option value='fluid'>Fluide</option>
                      <option value='fixed'>Fixée</option>
                    </select>
                    <div className='form-text text-muted'>
                      Sélectionnez le type de largeur d'en-tête.
                    </div>
                  </div>
                </div>
              </div>

              <div className={clsx('tab-pane', {active: tab === 'Toolbar'})}>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Affichage :</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name='layout-builder[layout][toolbar][display]'
                        checked={config.toolbar.display}
                        onChange={() =>
                          updateData({
                            toolbar: {
                              ...config.toolbar,
                              display: !config.toolbar.display,
                            },
                          })
                        }
                      />
                    </div>
                    <div className='form-text text-muted'>Affichage de toolbar</div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Fixer le toolbar:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <label className='form-check form-check-custom form-check-solid form-switch mb-5'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name='layout-builder[layout][header][fixed][desktop]'
                        checked={config.toolbar.fixed.desktop}
                        onChange={() =>
                          updateData({
                            toolbar: {
                              ...config.toolbar,
                              fixed: {
                                ...config.toolbar.fixed,
                                desktop: !config.toolbar.fixed.desktop,
                              },
                            },
                          })
                        }
                      />
                      <span className='form-check-label text-muted'>Desktop</span>
                    </label>

                    <label className='form-check form-check-custom form-check-solid form-switch mb-3'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        checked={config.toolbar.fixed.tabletAndMobileMode}
                        onChange={() =>
                          updateData({
                            toolbar: {
                              ...config.toolbar,
                              fixed: {
                                ...config.toolbar.fixed,
                                tabletAndMobileMode: !config.toolbar.fixed.tabletAndMobileMode,
                              },
                            },
                          })
                        }
                      />
                      <span className='form-check-label text-muted'>Tablet & Mobile</span>
                    </label>
                    <div className='form-text text-muted'>Activer la barre d'outils fixe</div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Largeur :</label>
                  <div className='col-lg-9 col-xl-4'>
                    <select
                      className='form-select form-select-solid'
                      name='layout-builder[layout][toolbar][width]'
                      value={config.toolbar.width}
                      onChange={(e) =>
                        updateData({
                          toolbar: {
                            ...config.toolbar,
                            width: e.target.value as 'fixed' | 'fluid',
                          },
                        })
                      }
                    >
                      <option value='fluid'>Fluide</option>
                      <option value='fixed'>Fixé</option>
                    </select>
                    <div className='form-text text-muted'>
                      Sélectionnez le type de largeur de mise en page.
                    </div>
                  </div>
                </div>
              </div>
              <div className={clsx('tab-pane', {active: tab === 'PageTitle'})}>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Affichage:</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name='layout-builder[layout][pageTitle][display]'
                        checked={config.pageTitle?.display}
                        onChange={() =>
                          updateData({
                            pageTitle: {
                              ...config.pageTitle!,
                              display: !config.pageTitle?.display,
                            },
                          })
                        }
                      />
                    </div>
                    <div className='form-text text-muted'>Afficher le titre de la page</div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Fil d'Ariane :</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        name='layout-builder[layout][pageTitle][breadCrumbs]'
                        checked={config.pageTitle?.breadCrumbs}
                        onChange={() =>
                          updateData({
                            pageTitle: {
                              ...config.pageTitle!,
                              breadCrumbs: !config.pageTitle?.breadCrumbs,
                            },
                          })
                        }
                      />
                    </div>
                    <div className='form-text text-muted'>Afficher le titre de la page</div>
                  </div>
                </div>
              </div>
              <div className={clsx('tab-pane', {active: tab === 'Content'})}>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Largeur :</label>
                  <div className='col-lg-9 col-xl-4'>
                    <select
                      className='form-select form-select-solid'
                      name='layout-builder[layout][content][width]'
                      value={config.content.width}
                      onChange={(e) =>
                        updateData({
                          content: {
                            ...config.content,
                            width: e.target.value as 'fixed' | 'fluid',
                          },
                        })
                      }
                    >
                      <option value='fluid'>Fluid</option>
                      <option value='fixed'>Fixed</option>
                    </select>
                    <div className='form-text text-muted'>
                      Sélectionnez le type de largeur de mise en page .
                    </div>
                  </div>
                </div>
              </div>
              <div className={clsx('tab-pane', {active: tab === 'Aside'})}>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Affichage :</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='switch switch-icon'>
                      <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          name='layout-builder[layout][aside][display]'
                          checked={config.aside.display}
                          onChange={() =>
                            updateData({
                              aside: {
                                ...config.aside,
                                display: !config.aside.display,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className='form-text text-muted'>Afficher la barre latérale</div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Theme :</label>
                  <div className='col-lg-9 col-xl-4'>
                    <select
                      className='form-select form-select-solid'
                      name='layout-builder[layout][aside][theme]'
                      value={config.aside.theme}
                      onChange={(e) =>
                        updateData({
                          aside: {
                            ...config.aside,
                            theme: e.target.value as 'dark' | 'light',
                          },
                        })
                      }
                    >
                      <option value='dark'>Dark</option>
                      <option value='light'>Light</option>
                    </select>
                    <div className='form-text text-muted'>
                      Sélectionnez le type de contenu de l'en-tête gauche.
                    </div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Fixe :</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='switch switch-icon'>
                      <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          name='layout-builder[layout][aside][fixed]'
                          checked={config.aside.fixed}
                          onChange={() =>
                            updateData({
                              aside: {
                                ...config.aside,
                                fixed: !config.aside.fixed,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className='form-text text-muted'>Activer la barre latérale fixe</div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Minimiser :</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='switch switch-icon'>
                      <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          name='layout-builder[layout][aside][minimize]'
                          checked={config.aside.minimize}
                          onChange={() =>
                            updateData({
                              aside: {
                                ...config.aside,
                                minimize: !config.aside.minimize,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className='form-text text-muted'>
                      Activer la minimisation de la barre latérale
                    </div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Minimisé :</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='switch switch-icon'>
                      <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          name='layout-builder[layout][aside][minimized]'
                          checked={config.aside.minimized}
                          onChange={() =>
                            updateData({
                              aside: {
                                ...config.aside,
                                minimized: !config.aside.minimized,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className='form-text text-muted'>Barre latérale réduite par défaut</div>
                  </div>
                </div>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Survolable :</label>
                  <div className='col-lg-9 col-xl-4'>
                    <div className='switch switch-icon'>
                      <div className='form-check form-check-custom form-check-solid form-switch mb-2'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          name='layout-builder[layout][aside][hoverable]'
                          checked={config.aside.hoverable}
                          onChange={() =>
                            updateData({
                              aside: {
                                ...config.aside,
                                hoverable: !config.aside.hoverable,
                              },
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className='form-text text-muted'>Activer le survol minimisé de côté</div>
                  </div>
                </div>
              </div>

              <div className={clsx('tab-pane', {active: tab === 'Footer'})}>
                <div className='row mb-10'>
                  <label className='col-lg-3 col-form-label text-lg-end'>Largeur :</label>
                  <div className='col-lg-9 col-xl-4'>
                    <select
                      className='form-select form-select-solid'
                      name='layout-builder[layout][footer][width]'
                      value={config.footer.width}
                      onChange={(e) =>
                        updateData({
                          footer: {
                            ...config.footer,
                            width: e.target.value as 'fixed' | 'fluid',
                          },
                        })
                      }
                    >
                      <option value='fluid'>Fluide</option>
                      <option value='fixed'>Fixée</option>
                    </select>
                    <div className='form-text text-muted'>
                      Sélectionnez le type de largeur de mise en page.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end::Body */}

          {/* begin::Footer */}
          <div className='card-footer py-6'>
            <div className='row'>
              <div className='col-lg-3'></div>
              <div className='col-lg-9'>
                <button type='button' onClick={updateConfig} className='btn btn-primary me-2'>
                  {!configLoading && <span className='indicator-label'>Aperçu</span>}
                  {configLoading && (
                    <span className='indicator-progress' style={{display: 'block'}}>
                      S'il vous plaît, attendez...{' '}
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>
                <button
                  type='button'
                  id='kt_layout_builder_reset'
                  className='btn btn-active-light btn-color-muted'
                  onClick={reset}
                >
                  {!resetLoading && <span className='indicator-label'>Réinitialiser</span>}
                  {resetLoading && (
                    <span className='indicator-progress' style={{display: 'block'}}>
                      Please wait...{' '}
                      <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* end::Footer */}
        </form>
        {/* end::Form */}
      </div>
    </>
  )
}

export {BuilderPage}
