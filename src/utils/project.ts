import IconPending from '../images/project-status/pending.svg';
import IconDoing from '../images/project-status/doing.svg';
import IconFinish from '../images/project-status/finished.svg';
import IconPaused from '../images/project-status/paused.svg';

export type TAllProjectStatus = 'PENDING' | 'DOING' | 'PAUSED' | 'FINISHED';

type IProjectStatus = {
	name: string;
  key: TAllProjectStatus;
  icon: string;
};

/**
 * @description: 工作具备的状态
 * @param {*} PENDING: 未开始
 * @param {*} DOING: 进行中
 * @param {*} PAUSED: 暂停
 * @param {*} FINISHED: 完成
 * @return {*}
 */
export const projectStatus: IProjectStatus[] = [
  {
    name: '未开始',
    // name:i18next.t('state.noStarted'),
    key: 'PENDING',
    icon: IconPending,
  },
  {
    name: '进行中',
    // name:i18next.t('state.haveInHand'),
    key: 'DOING',
    icon: IconDoing,
  },
  {
    name: '暂停',
    // name:i18next.t('state.suspend'),
    key: 'PAUSED',
    icon: IconPaused,
  },
  {
    name: '完成',
    // name:i18next.t('state.complete'),
    key: 'FINISHED',
    icon: IconFinish,
  }
]